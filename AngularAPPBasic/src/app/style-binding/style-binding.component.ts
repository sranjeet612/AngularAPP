import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent{
  color="Red";
  BackgroundColor="Yellow";
  UpdateColor()
  {
    this.color="green";
    this.BackgroundColor="orange";
  }
}
