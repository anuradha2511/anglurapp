import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  dis=true;
  title:string = 'Data Binding';
name:string='Anuradha Patil'

 @Input() myinputMsg: string;
  constructor() { }

  ngOnInit() {
    console.log('from parent', this.myinputMsg);
    
  }
  change(){
    this.title="Complete two Types Of Databindig"
  }
  delete(){
    this.name=' ';
  }
  

}
