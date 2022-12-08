import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
name: string = "Anuradha Patil";
education: any[]=[];

getChildData(value){
  this.education = value;
  // this.education.push(value);
console.log(this.education);
}
remove(value){
  this.education.splice(value.target.value,1);
}
  constructor() { }

  ngOnInit() {
  }

}
