import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee1 } from '../models/formDetails';

@Component({
  selector: 'app-template-form-assign',
  templateUrl: './template-form-assign.component.html',
  styleUrls: ['./template-form-assign.component.css']
})
export class TemplateFormAssignComponent implements OnInit {
  defaultValue:string = 'Advanced';
  emp= new Employee1();
  submitted: boolean= false;
  myForm: any;
  
  constructor() { }

  ngOnInit() {
  }
  
  OnSubmit(form:NgForm){
this.submitted = true;
this.emp.username = form.value.userDetails.username;
this.emp.email = form.value.userDetails.email;
this.emp.subscription = form.value.userDetails.subscription;
this.emp.password = form.value.userDetails.password;

this.saveEmployeeData(this.emp)

  }
  saveEmployeeData(emp:Employee1){
console.log(emp.username);
console.log(emp.email);
console.log(emp.subscription);
console.log(emp.password);
  }

  reset(){
    this.myForm.reset();
  }
}
