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
      class : 7
    },
    {
      id : 2,
      name : 'DEF',
      class : 8
    },
    {
      id : 3,
      name : 'GHI',
      class : 9
    },
    {
      id : 4,
      name : 'JKL',
      class : 10
    }
  ]

}