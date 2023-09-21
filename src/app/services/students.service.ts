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

  createStudent(newStudent: IStudent): Observable<void> {
    return new Observable<void>((observer) => {
      students.push(newStudent);
      observer.next();
      observer.complete();
    }).pipe(delay(300));
  }

  deleteStudent(deletedStudent: IStudent): Observable<void> {
    return new Observable<void>((observer) => {
      const index = students.findIndex((student) => {
        return student.id === deletedStudent.id;
      });
      if (index !== -1) students.splice(index, 1);

      observer.next();
      observer.complete();
    }).pipe(delay(300));
  }
}
