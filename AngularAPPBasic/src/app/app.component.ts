import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAPPBasic';
  message='This is my first Angular Application';

  getName(name:string)
  {
    alert(name);
  }
  Getmessage(message:string)
  {
     alert(message);
  }
  
  GetkeyupData(val:string)
  {
    console.log(val);
  }
  GetkeydownData(val:string)
  {
    console.log(val);
  }
  getblurData(val:string)
  {
    console.log(val);
  }
  getmouseoverdata(val:string)
  {  
    alert(val);
  }
  getmouseleaveData(val:string)
  {
     alert(val);
  }
}
