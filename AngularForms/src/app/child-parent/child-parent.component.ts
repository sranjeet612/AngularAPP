import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {

 @Output() childEvent=new EventEmitter<string>();

 getData(val:string)
 {
  this.childEvent.emit(val);
 }

}
