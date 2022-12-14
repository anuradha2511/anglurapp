import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _demoService: DemoService, private _postsService: PostService){

  }
  ngOnInit(): void {
    this._demoService.getUsersData().subscribe(data => {
      console.log('getting data from api', data);
      
    } )

    //  this._demoService.getPosts().subscribe(results => {
    //   console.log('posts', results);
      
    // })
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

DeletePost(){
  this._postsService.deletePostById(1).subscribe( result => {
    console.log(result);
    
  })
}
}
