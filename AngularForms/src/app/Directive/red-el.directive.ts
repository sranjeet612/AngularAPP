import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEL]'
})
export class RedELDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="Yellow";
    el.nativeElement.style.border="3px solid green";
   }

}
