import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent{
  user=['Ranjeet','Albert','Peter','Robert','Scott','John']
  userdetails=[
    {Name:'Ranjeet',Email:'sranjeet612@gmail.com',mobile:'9634543237'},
    {Name:'Albert',Email:'albert@gmail.com',mobile:'8684858696'},
    {Name:'Peter',Email:'perter@gmail.com',mobile:'6754567876'},
    {Name:'Robert',Email:'Robert@gmail.com',mobile:'6754567876'},
    {Name:'Scott',Email:'Scott@gmail.com',mobile:'6754567876'},
    {Name:'John',Email:'John@gmail.com',mobile:'6754567876'}
  ]
  
  users=[
    {Name:'Ranjeet',Email:'sranjeet@gmail.com',social:['facebook','Insta','Linked']},
    {Name:'Peter',Email:'Peter@gmail.com',social:['facebook','Insta','Linked']},
    {Name:'Albert',Email:'Albert@gmail.com',social:['facebook','Insta','Linked']},
    {Name:'Scott',Email:'Scott@gmail.com',social:['facebook','Insta','Linked']}
  ]
}









