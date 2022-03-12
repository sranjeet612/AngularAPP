import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  show=false;
  Message:string="Data from Child";
  userDetails=[
    {id:1,Name:"Ranjeet",Email:"Ranjeet@gmail.com"},
    {id:2,Name:"Albert",Email:"Albert@gmail.com"},
    {id:3,Name:"John",Email:"John@gmail.com"},
    {id:4,Name:"Peter",Email:"peter@gmail.com"},
    {id:5,Name:"Scott",Email:"Scott@gmail.com"},
  ];

  toggle()
  {
    this.show=!this.show;
  }
  updateData(val:string)
  {
    this.Message=val;
  }

  getChildData(childData:string)
  {
   this.Message=childData;
  }
}
