import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StudentsService } from '../../shared/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student;
  server : {id : number, name : string, class: number, image:string};

  constructor(private currentRoute : ActivatedRoute, private studentsService : StudentsService) { }

  ngOnInit() {
    const id = this.currentRoute.params.subscribe(
      (params) => {
        return params['id'];
      }
    )
    this.server = this.studentsService.getServer(id);
  }



}