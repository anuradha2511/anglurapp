import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signup(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  checkUserNameandPassword(username: string, pwd: string){
    if(username == "admin" && pwd == "admin123") {
     localStorage.setItem('username', "admin");
      return true;
    } 
    else 
    {
      return false;
    }
  }
}
