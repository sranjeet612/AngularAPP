import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <h1 class="green">
      student-list works!
    </h1>
  `,
  styles: [
    `.green{
      color:green;
    }`
  ]
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
