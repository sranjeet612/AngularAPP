import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `.red{
      color:red;
      border: 2px solid green;
    }`
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
