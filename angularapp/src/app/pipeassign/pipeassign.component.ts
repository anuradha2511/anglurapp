import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipeassign',
  templateUrl: './pipeassign.component.html',
  styleUrls: ['./pipeassign.component.css']
})
export class PipeassignComponent implements OnInit {

  todayDate = new Date();
  price: number = 60000;
  obj = {  id:'101', name: 'Gayatri',salary: '55,000'}
observable;
val= 'Angular is an open-source framework';

  constructor(private _utilityService: UtilityService) {
    this.observable = this._utilityService.userName;
   }

  ngOnInit() {
  }

}
