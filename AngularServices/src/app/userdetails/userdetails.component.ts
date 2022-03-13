import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Services/employee.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  Emp:any;
  constructor(private emp:EmployeeService) { 
    this.Emp=emp.getEmployee();
  }

  ngOnInit(): void {
  }

}
