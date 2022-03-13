import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../Services/user.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  saveUser(data:NgForm)
  {
    console.log(data);
    this.user.saveuser(data).subscribe((res)=>{
      console.log(res);
    });
    
  }

}
