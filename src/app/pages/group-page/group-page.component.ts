import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, auditTime } from 'rxjs';
import { createId } from 'src/app/backData/serverData';
import { IGroup } from 'src/app/modeles/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
})
export class GroupPageComponent implements OnInit {
  groups$: BehaviorSubject<IGroup[]> = new BehaviorSubject<IGroup[]>([]);
  inputGroupName: string | undefined;
  isDesc: boolean = true;

  constructor(private groupService: GroupService, private router: Router) {}

  getData(): void {
    this.groupService.listGroups().subscribe((groups) => {
      this.groups$.next(groups);
    });
  }

  createGroup(): void {
    if (!this.inputGroupName) return;
    const newGroup: IGroup = {
      id: createId(0),
      number: this.inputGroupName,
      numberOfStudents: 0,
    };

    this.groupService.createGroup(newGroup).subscribe(() => {
      const groups = this.groups$.getValue();
      groups.push(newGroup);
      this.groups$.next(groups);
      this.inputGroupName = '';
    });

    this.router.navigate(['/group', newGroup.id], {
      queryParams: {
        number: newGroup.number,
        numberOfStudents: newGroup.numberOfStudents,
      },
    });
  }

  openGroupInfoPage(group: IGroup): void {
    this.router.navigate(['/group', group.id], {
      queryParams: {
        number: group.number,
        numberOfStudents: group.numberOfStudents,
      },
    });
  }

  sortList(): void {
    this.isDesc = !this.isDesc;
    const groups = this.groups$.getValue();
    if (this.isDesc)
      groups?.sort((a, b) => {
        if (a.number < b.number) return -1;
        else if (a.number > b.number) return 1;
        else return 0;
      });
    else
      groups?.sort((a, b) => {
        if (a.number > b.number) return -1;
        else if (a.number < b.number) return 1;
        else return 0;
      });
  }

  ngOnInit(): void {
    this.getData();
    this.sortList();
  }
}
