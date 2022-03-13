import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  Employee:any;
  constructor(private emp:EmployeeService) 
  { 
     this.Employee=emp.getEmployee();
     console.log(this.Employee);
  }

  ngOnInit(): void {
  }

}
