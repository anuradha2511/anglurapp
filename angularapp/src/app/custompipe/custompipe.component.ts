import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
 employee: any [] = [
  {
    id:'101', name:'Pratiksha', gender:'Female', company: 'TCS', salary: '45,000'
  },
  {
    id:'102', name:'Omkar', gender:'Male', company:'Wipro', salary:'50,000'
  },
  {
    id:'103', name:'Vikram', gender:'Male', company:'Infosys', salary:'60,000'
  },
  {
    id:'104', name:'Anuradha', gender:'Female', company:'TCS', salary:'55,000'
  },
  {
    id:'105', name:'Gayatri', gender:'Female', company:'Capgemini', salary:'40,000'
  },
  {
    id:'106', name:'Om', gender:'Male', company:'Accenture', salary:'30,000'
  },
  {
    id:'107', name:'Janavi', gender:'Female', company:'Capgemini', salary:'42,000'
  },
  {
    id:'108', name:'Prathmesh', gender:'Male', company:'TCS', salary:'25,000'
  },
  {
    id:'109', name:'Arnav', gender:'Male', company:'Accenture', salary:'65,000'
  },
  {
    id:'110', name:'Kavya', gender:'Female', company:'Wipro', salary:'40,000'
  },
 ]
  constructor() { }

  ngOnInit() {
  }

}
