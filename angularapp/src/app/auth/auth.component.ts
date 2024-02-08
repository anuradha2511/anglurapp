import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoading = false;
  isLoginMode=true;
  error: string =null;
  constructor(private _authService: AuthService ) { }

  ngOnInit() {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
if(!form.valid){
  return;
}

const email = form.value.email;
const password = form.value.password;
this.isLoading = true;
if(this.isLoginMode)
{
  //// login
  console.log("sign in");
} 
else
{

this._authService.signup(email, password).subscribe(res =>{
  console.log(res);
  this.isLoading = false;
},
errorMessage =>{
  this.error = errorMessage;
  this.isLoading = false;
})
  // console.log('sign up');
  
  }
 }
}
