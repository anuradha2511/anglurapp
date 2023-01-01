import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
res:any;
  newsApi:any = [];
  quoteData:any = [];
  constructor( private _rapidAPIService: RapidapiService) { }

  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe(res => {
      console.log('rapid finance data', res);
this.res = res;
this.newsApi = this.res.news;
console.log("Rapid Api news:", this.newsApi);

this.quoteData = this.res.quote;
console.log("Rapid Api quote", this.quoteData);

// this.newsApi.push(res);
    })
  }

}
