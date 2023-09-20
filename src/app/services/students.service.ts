import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { students } from '../backData/serverData';
import { IStudent } from '../modeles/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  listStudents(): Observable<IStudent[]> {
    return of(students).pipe(delay(300));
  }

  createStudent(newStudent: IStudent): void {
    students.push(newStudent);
  }

  deleteStudent(deletedStudent: IStudent): void {
    const index = students.findIndex((student) => {
      return student.id === deletedStudent.id;
    });
    if (index !== -1) students.splice(index, 1);
  }
}
