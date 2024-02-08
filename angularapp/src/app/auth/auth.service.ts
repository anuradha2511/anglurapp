import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
signup(email:string, password: string){
  return this._http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiH19aPCR8ouzd-XZronLEVavH7llpadc',
  {
    email: email,
    password: password,
    returnSecureToken: true
  }).pipe(
    catchError( errorRes => {
      let errorMessage = 'An unknown error occured!';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS' :
          errorMessage = 'This email exist already';
      }
      return throwError(errorMessage);
    })
  )
  ;
}

login(email:string, password:string){
  this._http.post
}
}
