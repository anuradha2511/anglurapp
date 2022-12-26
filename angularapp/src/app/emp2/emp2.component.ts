import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {

 employee;
 
  constructor(private _employeeService: EmployeeService) {
    this._employeeService.employee.subscribe(res => {
      this.employee = res;
      console.log(res);
      
    })
   }

  ngOnInit() {
  }
  // updateEmployeeDetails(emp1) {
  //   console.log(emp1.value);

  //   let emp = {
  //     id: '102',
  //     name:'Pratiksha',
  //     salary: '50,000'
  //   }
  //      this._employeeService.employee.next(JSON.stringify(emp));

  // }
  // updateUserDetails(emp1){
  //   let emp = 
  //   {
  //     name:'Anuradha' ,
  //     city: 'karad', 
  //     mobile:'7262868038' , 
  //     course: 'angular'
  //   }
  //   this._employeeService.employee.next(emp);
  //   console.log("button",this.employee);
  // }
  updateEmployeeDetails(name,city,mobile,company,salary){
    let user = 
    {
      name: name.value,
      city: city.value, 
      mobile: mobile.value, 
      company: company.value,
      salary: salary.value
    }
    this._employeeService.employee.next(user);
    console.log("button",this.employee);
  }
}
