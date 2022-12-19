import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../models/registrationForm';

@Component({
  selector: 'app-temp-assign2',
  templateUrl: './temp-assign2.component.html',
  styleUrls: ['./temp-assign2.component.css']
})
export class TempAssign2Component implements OnInit {
  defaultGender: string='female';
  defaultValue: string= 'Mumbai';
    submitted: boolean= false;
  emp = new Registration();
   genders = [
    {id:'1', value:'Male'},
     {id:'2', value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    // console.log(form);
    
this.submitted = true;
this.emp.firstname = form.value.firstname;
this.emp.lastname = form.value.lastname;
this.emp.age = form.value.age;
this.emp.email = form.value.email;
this.emp.mobile = form.value.mobile;
this.emp.city = form.value.city;
this.emp.gender = form.value.gender;
this.emp.password = form.value.password;
this.emp.pwd = form.value.pwd;

this.saveEmployeeData(this.emp)

  }
  saveEmployeeData(emp:Registration){
console.log(emp.firstname);
console.log(emp.lastname);
console.log(emp.age);
console.log(emp.email);
console.log(emp.mobile);
console.log(emp.city);
console.log(emp.gender);
console.log(emp.password);
console.log(emp.pwd);

  
}

}