import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../models/registrationForm';

@Component({
  selector: 'app-reactive-form-assign',
  templateUrl: './reactive-form-assign.component.html',
  styleUrls: ['./reactive-form-assign.component.css']
})
export class ReactiveFormAssignComponent implements OnInit {
submitted: boolean = false;
defaultGender: string = 'Female';
genders = [
  {
    id: '1',
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }
]

user;
register:any[]=[];

myReactiveForm: FormGroup;

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  OnSubmit(){
    // this.submitted = true;
    console.log(this.myReactiveForm);
    this.user=new Registration()
this.user.firstname = this.myReactiveForm.value.firstname;
this.user.lastname = this.myReactiveForm.value.lastname;
this.user.age = this.myReactiveForm.value.age;
this.user.email = this.myReactiveForm.value.email;
this.user.mobile = this.myReactiveForm.value.mobile;
this.user.city = this.myReactiveForm.value.city;
this.user.gender = this.myReactiveForm.value.gender;
this.user.password = this.myReactiveForm.value.password;
this.user.pwd = this.myReactiveForm.value.pwd;
this.register.push(this.user);
console.log(this.myReactiveForm.value);

    
  }
  createForm(){
this.myReactiveForm = new FormGroup({
  'firstname': new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]),
  'lastname': new FormControl('', [Validators.required, Validators.max(10), Validators.min(10)]),
  'age': new FormControl('', [Validators.required, Validators.min(17), Validators.max(20)]),
  'email': new FormControl('', [Validators.required, Validators.email]),
  'mobile': new FormControl('', [Validators.required,Validators.min(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  'city': new FormControl('Mumbai'),
  'gender': new FormControl('female'),
  'password': new FormControl('', [Validators.required, Validators.min(6)]),
  'pwd': new FormControl('', [Validators.required])
})

  }

}
