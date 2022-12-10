import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
stud = new Student();
submitted: boolean =false;


loginUser(item:any){
  console.log(item);
  
}

title = 'Two Way Binding ';
name:any;

title1= 'Templete Reference Variable';
getVal(item:any){
  console.log(item);
  
}
// readmore variable, its true than read more string will print (toggle example)
ReadMore:boolean = true;

//hiding info box
visible:boolean = false;

//onclick toggling both
onclick( )
{
this.ReadMore = !this.ReadMore; // not equal to condition
this.visible = !this.visible;
}
  constructor() { }
  
  ngOnInit() {
  }
OnSubmit(form:NgForm){
  this.submitted = true;
  this.stud.name = form.value.studentDetails.name;
  this.stud.email = form.value.studentDetails.email;
  this.stud.dob = form.value.dob;
  this.stud.gender = form.value.gender;
  this.stud.address = form.value.address;
  this.stud.mobileNo = form.value.mobileNo;
  this.stud.department= form.value.department;
  // console.log(form.value.studentDetail.name);
  // console.log(form.value.studentDetail.);
  // console.log(form.value.name);
  // console.log(form.value.name);
this.saveStudentInformation(this.stud)
}
  saveStudentInformation(stud:Student){
    console.log(stud.name);
    console.log(stud.email);
    console.log(stud.dob);
    console.log(stud.gender);
    console.log(stud.address);
    console.log(stud.mobileNo);
    console.log(stud.department);

  }
  
  

}


