import { IGroup } from '../modeles/group';
import { IStudent } from '../modeles/student';

export const createId = (offset: number) => {
  return new Date().getTime().toString() + offset;
};

export const students: IStudent[] = [
  {
    id: createId(5),
    idGroup: createId(1),
    date: '20.09.2020',
    fullName: 'Алексеев Петр',
  },
  {
    id: createId(6),
    idGroup: createId(1),
    date: '10.09.2020',
    fullName: 'Андреев Андрей',
  },
  {
    id: createId(7),
    idGroup: createId(1),
    date: '21.09.2020',
    fullName: 'Васильев Александр',
  },
  {
    id: createId(8),
    idGroup: createId(1),
    date: '31.12.2019',
    fullName: '1',
  },
  {
    id: createId(8),
    idGroup: createId(2),
    date: '31.12.2019',
    fullName: '2',
  },
  {
    id: createId(8),
    idGroup: createId(3),
    date: '31.12.2019',
    fullName: '3',
  },
  {
    id: createId(8),
    idGroup: createId(4),
    date: '31.12.2019',
    fullName: '4',
  },
];

const findLength = (idGroup: string): number => {
  return students.filter((students) => students.idGroup === idGroup).length;
};

export const groupsData: IGroup[] = [
  {
    id: createId(1),
    number: '20-01',
    numberOfStudents: findLength(createId(1)),
  },
  {
    id: createId(2),
    number: '20-02',
    numberOfStudents: findLength(createId(2)),
  },
  {
    id: createId(3),
    number: '19-03',
    numberOfStudents: findLength(createId(3)),
  },
  {
    id: createId(4),
    number: '19-01',
    numberOfStudents: findLength(createId(4)),
  },
];
