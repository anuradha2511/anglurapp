import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
