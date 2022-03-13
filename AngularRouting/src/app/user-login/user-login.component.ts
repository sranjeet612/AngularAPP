import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  routeValue:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeValue=this.route.snapshot.paramMap.get('id');
  }

}
