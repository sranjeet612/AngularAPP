import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   
  routeValue:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeValue=this.route.snapshot.paramMap.get('id');
  }

}
