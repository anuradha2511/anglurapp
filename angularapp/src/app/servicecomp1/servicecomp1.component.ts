import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  productss:any =[{}];
  apiData: any= [];
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
  //  this.productss = this._demoService.products;
  
  this._demoService.getUsersData().subscribe(data => {
    console.log('getting data from api', data);
    this.apiData =data;
    console.log('getting data from array', this.apiData);
    
    
  })
  }
  //  OnSubscribe() 
  //  {
  //   alert('servicecomp1 subscribe');
  //    this._demoService.display();
  // }

}
