import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {
employee;
  constructor(private _employeeService: EmployeeService) {
    this._employeeService.employee.subscribe(res => {
      this.employee = res;
    })
   }

  ngOnInit() {
  }
  updateEmployeeDetails(emp1) {
    console.log(emp1.value);

    let emp = {
      id: '101',
      name:'Anuradha',
      salary: '25,000'
    }
       this._employeeService.employee.next(JSON.stringify(emp));

  }
}
