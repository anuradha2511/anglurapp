import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {

websiteName:string = "Enter Website";
websitelist = [];

onclick(prouser){
  if(prouser.value.length > 0)
  this.websitelist.push(prouser.value);
  prouser.value = '';
  
}
onremove(removeme){
this.websitelist.splice(removeme, 1);
}

  constructor() { }

  ngOnInit() {
  }
  
}


// summary
//local ref variable
//attribute binding
//click event
//function with parameter
//array
//array splice method
//array push method
//if condition
//ngFor directives