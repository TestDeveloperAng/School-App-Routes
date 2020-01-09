import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {
  private students = [
    {
      id : 1,
      name : 'ABC',
      class : 7,
      image : 'https://image0.flaticon.com/icons/png/128/167/167750.png'
    },
    {
      id : 2,
      name : 'DEF',
      class : 8,
      image : 'https://image0.flaticon.com/icons/png/128/167/167750.png'
    },
    {
      id : 3,
      name : 'GHI',
      class : 9,
      image : 'https://image0.flaticon.com/icons/png/128/167/167750.png'
    },
    {
      id : 4,
      name : 'JKL',
      class : 10,
      image : 'https://image0.flaticon.com/icons/png/128/167/167750.png'
    }
  ]

  getServer(id: number){
    const student = this.students.find(
      (s) => {
        return s.id === id;
      }
    );
    return student;
  }
  constructor() { }

}