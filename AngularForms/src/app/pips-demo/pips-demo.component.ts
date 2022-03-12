import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pips-demo',
  templateUrl: './pips-demo.component.html',
  styleUrls: ['./pips-demo.component.css']
})
export class PipsDemoComponent {

  Name: string = "Ranjeet Singh";
  BirthDay = Date();
  salary: number = 50000;
  Data = {
    id: 1,
    Name: "Ranjeet",
    Email: "ranjeet@gmail.com",
    Salary: 50000,
    Address: "Hyderabad"
  }

}
