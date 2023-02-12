import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {

  cntSlides = 0;

  constructor( private el: ElementRef) { 
  }

  @HostListener('click') onMouseClick(){
    this.cntSlides += 1;

    if(this.cntSlides % 2 == 1) this.addClass('dark_mode')
    else this.removeClass('dark_mode');
  }

  private addClass(className: string){
      this.el.nativeElement.classList.add(className);
  }

  private removeClass(className: string){
      this.el.nativeElement.classList.remove(className);
  }

}
