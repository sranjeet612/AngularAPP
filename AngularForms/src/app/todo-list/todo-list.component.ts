import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  list:any[]=[];
  AddList(item:string)
  {
    this.list.push({Id:this.list.length,Name:item});
    console.log(this.list);
  }
  RemoveItem(id:number)
  {
    this.list=this.list.filter(el=>el.Id!=id);
  }
}
