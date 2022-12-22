import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  todaysDate = new Date();
  obser;
  price: number = 800000;
  prices: number = 7.9898;
  obj = { id: '101', name: 'test1'}
  pricess: number = 20000;
value: string = 'Hello, welcome to angular ';

  constructor(private _utilityService: UtilityService) {
    this.obser= this._utilityService.userName;

   }

  ngOnInit() {
    
  }

}
