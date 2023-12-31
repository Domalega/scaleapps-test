import { Injectable } from '@angular/core';
import { IGroup } from '../modeles/group';
import { Observable, delay, of } from 'rxjs';
import { groupsData } from '../backData/serverData';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor() {}

  listGroups(): Observable<IGroup[]> {
    return of(groupsData).pipe(delay(300));
  }

  createGroup(newGroup: IGroup): Observable<void> {
    return new Observable<void>((obserer) => {
      groupsData.push(newGroup);

      obserer.next();
      obserer.complete();
    }).pipe(delay(300));
  }
}
