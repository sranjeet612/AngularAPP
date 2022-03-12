import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  reactForm=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  
  Data:{Name:string,Email:string,Password:string}={Name:'',Email:'',Password:''}

  Login()
  {
    console.log(this.reactForm.value);
    this.Data=this.reactForm.value;
  }

  get UserName()
  {
      return this.reactForm.get('Name');
  }
  
  get Email()
  {
    return this.reactForm.get('Email');
  }
  get Password()
  {
    return this.reactForm.get('Password');
  }

}
