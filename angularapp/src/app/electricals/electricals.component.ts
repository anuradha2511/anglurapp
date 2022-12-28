import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricals',
  templateUrl: './electricals.component.html',
  styleUrls: ['./electricals.component.css']
})
export class ElectricalsComponent implements OnInit {
price:number = 10125;
  constructor() { }

  ngOnInit() {
  }

}
