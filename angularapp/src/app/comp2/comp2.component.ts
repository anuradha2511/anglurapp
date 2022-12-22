import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName= res;
    })
   }

  ngOnInit(): void {

  }

  updateUserName(uname){
console.log(uname.value);
//next method is used to send message to an observable i.e. username
this._utilityService.userName.next(uname.value);

  }
}
