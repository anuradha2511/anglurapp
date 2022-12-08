import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
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

}
