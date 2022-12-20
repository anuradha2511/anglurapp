import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _demoService: DemoService){

  }
  ngOnInit(): void {
    this._demoService.getUsersData().subscribe(data => {
      console.log('getting data from api', data);
      
    } )
  }
  data: string = 'red';
  name: string;
  price: number;
  product: Product = new Product();

  public uid: number;

  // public ubank: any;
  title = 'angularapp';
  uname = "I am from success-alert component";

  EmployeeRecords: any = [
    {
      empName: 'Arnav', empCity:'Karad', empSalary: '300000'
    },
    {
      empName: 'Omkar', empCity:'Pune', empSalary: '400000'

    },
    {
      empName: 'Kavya', empCity:'Satara', empSalary: '200000'

    }
  ]

  foods: string[] = [];

  appchildExist: boolean = true;

  destroy(){
    this.appchildExist = false;
  }

  getDataFromChild(value) {
console.log(value);
this.foods.push(value);

}
handleData(value) {
  this.data = value.target.value;
}
updateProduct(){
  // this.product = new Product();
  this.product.name = this.name;
  this.product.price = this.price;
}
}
