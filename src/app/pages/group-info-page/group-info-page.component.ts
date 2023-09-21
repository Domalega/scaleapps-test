import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createId } from 'src/app/backData/serverData';
import { IStudent } from 'src/app/modeles/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-group-info-page',
  templateUrl: './group-info-page.component.html',
})
export class GroupInfoPageComponent implements OnInit {
  students!: IStudent[];
  idGroup!: string;
  nameGroup!: string;
  inputStudentName: string | undefined;
  isDesc: boolean = true;

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  getData(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) this.idGroup = id;

    const number = this.activeRoute.snapshot.queryParamMap.get('number');
    if (number) this.nameGroup = number;

    this.studentService.listStudents().subscribe((students) => {
      this.students = students.filter((student) => {
        return student.idGroup === this.idGroup;
      });
    });
  }

  openGroupPage(): void {
    this.router.navigate(['/']);
  }

  createTodayDate(): string {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }

  createStudnet(): void {
    if (!this.inputStudentName) return;

    const newStudnet: IStudent = {
      id: createId(0),
      idGroup: this.idGroup,
      date: this.createTodayDate(),
      fullName: this.inputStudentName,
    };

    this.studentService.createStudent(newStudnet).subscribe(() => {
      this.getData();
    });
    this.inputStudentName = '';
  }

  deleteStudent(deletedStudent: IStudent): void {
    this.studentService.deleteStudent(deletedStudent).subscribe(() => {
      this.getData();
    });
  }

  sortList(): void {
    this.isDesc = !this.isDesc;

    if (this.isDesc)
      this.students?.sort((a, b) => {
        if (a.date < b.date) return -1;
        else if (a.date > b.date) return 1;
        else return 0;
      });
    else
      this.students?.sort((a, b) => {
        if (a.date > b.date) return -1;
        else if (a.date < b.date) return 1;
        else return 0;
      });
  }

  ngOnInit(): void {
    this.getData();
    this.sortList();
  }
}
