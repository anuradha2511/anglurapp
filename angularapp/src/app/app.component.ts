import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
