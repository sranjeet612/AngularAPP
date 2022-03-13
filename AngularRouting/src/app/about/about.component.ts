import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  RouteValue:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
         this.RouteValue=this.route.snapshot.paramMap.get('id');
  }

}
