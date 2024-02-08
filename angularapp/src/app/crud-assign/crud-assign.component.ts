import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-assign',
  templateUrl: './crud-assign.component.html',
  styleUrls: ['./crud-assign.component.css']
})
export class CrudAssignComponent implements OnInit {
myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }
  createForm(){
this.myReactiveForm = this._fb.group({
name: ['',[Validators.required]],
email:[''],
city: [''],
phone: ['']
})
  }

}
