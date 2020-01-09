import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

import { Routes,RouterModule } from '@angular/router';

const appRoutes = [
  {path : '', component : HomeComponent},
  {path : 'students', component : StudentsComponent},
  {path : 'classrooms', component : ClassroomsComponent},
  {path : 'teachers', component : TeachersComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, TeachersComponent, HomeComponent, StudentsComponent, ClassroomsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
