import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from '../models/education';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentComp: string;
@Input() employeeName: string;
@Input() Employeeobj:string;
@Output() eduEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

edu: Education[] = [
  {qualification: 'SSC', clg_university: 'Kolhapur Board', percentage:'70%', passingYear: '2015'},
  {qualification: 'HSC', clg_university: 'Kolhapur Board', percentage:'60%', passingYear: '2017'},
  {qualification: 'BCA', clg_university: 'Shivaji University, Kolhapur', percentage:'76%', passingYear: '2020'},

];
addData(){
  this.eduEvent.emit(this.edu);

}
  ngOnInit() {
    console.log("Data from child ", JSON.stringify(this.employeeName));
    
  }

}
