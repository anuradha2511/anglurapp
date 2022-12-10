import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {

  defaultValue: string = 'Angular';
 employee = new Employee();
 submitted: boolean =false;
 defaultGender: string = 'Female';
 genders = [
  {id:'1', value:'Male'},
  {id:'2', value:'Female'}
 ]
  constructor() { }

  ngOnInit() {
  }
OnSubmit(form:NgForm){
  this.submitted = true;
  this.employee.course = form.value.course;
  this.employee.username = form.value.userDetails.username;
  this.employee.email = form.value.userDetails.email;
  this.employee.gender = form.value.gender;
  form.reset();
  form.controls['course'].setValue('Angular');
  form.controls['gender'].setValue('Female');
  console.log(  form.controls);
  
  

// this.saveEmployeeData(this.employee);
// console.log(form.value.course);
// console.log(form.value.userDetails.username);
// console.log(form.value.userDetails.email);


}
saveEmployeeData(emp:Employee){
  console.log(emp.course);
  
}
minDate:any = "2022-12-10";
}
