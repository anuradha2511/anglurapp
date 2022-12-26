import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employee = new Subject<any>();
  //  employee = new BehaviorSubject();

  constructor() { }
}
