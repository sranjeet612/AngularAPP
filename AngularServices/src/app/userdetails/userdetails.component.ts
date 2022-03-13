import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Services/employee.service';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  Emp:any;
  users:any;
  constructor(private emp:EmployeeService,private user:UserService) { 
    this.Emp=emp.getEmployee();
    user.getUsers().subscribe((data)=>{
       console.log(data);
       this.users=data;
    })
  }
  
  ngOnInit(): void {
  }

}
