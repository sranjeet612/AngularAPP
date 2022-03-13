import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee() {
   return [
      { Name: "Ranjeet", Email: "ranjeet@gmail.com", Salary: 50000 },
      { Name: "Peter", Email: "peter@gmail.com", Salary: 40000 },
      { Name: "John", Email: "John@gmail.com", Salary: 60000 },
      { Name: "Albert", Email: "Alebrt@gmail.com", Salary: 30000 },
      { Name: "Scott", Email: "Scoot@gmail.com", Salary: 50000 }
    ]
  }
}
