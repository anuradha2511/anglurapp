import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {

  isShow: boolean = true;

  title:string = "Top 3 courses";
  course: Courses[] = [
    {id: 1, courseName: 'Java', fees: 50000, duration: '6 Months'},
    {id: 2, courseName: 'Angular', fees: 20000, duration: '3 Months'},
    {id: 3, courseName: 'Python', fees: 25000, duration: '3 Months'},
  ]

  selectedCourse: string;

  constructor() { }

  ngOnInit() {
  }
  getCourseName(value) {
    console.log(value.target.value);
    this.selectedCourse = value.target.value;
  }
}
