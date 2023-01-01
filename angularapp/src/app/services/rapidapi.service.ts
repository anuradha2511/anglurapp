import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private _httpClient: HttpClient) { }

  getDataBBFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Host':'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'b107d8c22cmshe652d6686c18307p1dad9cjsne7d8678028cf'
    })
    return this._httpClient.get(this.url, {headers: headers} );
  }

}
