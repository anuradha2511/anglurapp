import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL = 'https://jsonplaceholder.typicode.com/users';
  products = [
    {name: 'Laptop', id:'101'},
    {name: 'TV', id:'102'},
    {name: 'Mobile', id:'103'},

  ]
  constructor(private http: HttpClient) { }

  display(){
    alert('Subscribed successfully');
  }

  getUsersData()
  {
   return  this.http.get(this.apiURL);
    
  }
}
