import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  defaultValue = 'Angular';
  defaultGender = 'Female';
  notAllowedNames = ['codemind', 'Technology']
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
  myReactiveForm: FormGroup;
  
  constructor() { 
    this.craeteForm();
  }

  ngOnInit() {
  }

  craeteForm(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('',[Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'course': new FormControl('Angular'), 
      'gender': new FormControl('gender'),

    })
  }
  OnSubmit(){
    console.log(this.myReactiveForm);
    var selectedvalue = "";
  }
  NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    }
    return null;
  }
}
