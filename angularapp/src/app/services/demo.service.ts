import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  getPosts() {
    throw new Error('Method not implemented.');
  }

  // apiURL = 'https://jsonplaceholder.typicode.com/users';
  apiURL = 'https://jsonplaceholder.typicode.com/';

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
    let users = 'users';
    // return this.http.get(this.apiURL)
   return  this.http.get(this.apiURL+ users);
    
  }
  getDataPosts(){
    let posts = 'posts';
    return this.http.get(this.apiURL+ posts);
  }
}
