import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `.red{
      color:red;
    }`
  ]
})
export class UserListComponent
{  
  Data:string="";
  Message:string="";
  getdata(val:string)
  {
     this.Data=val;
  }
  GetTxtData(val:string)
  {
    this.Message=val;
  }
}
