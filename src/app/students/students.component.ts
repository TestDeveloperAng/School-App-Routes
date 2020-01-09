import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students = [
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

}