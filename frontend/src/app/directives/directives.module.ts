import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleClassDirective } from './toggle-class.directive';



@NgModule({
  declarations: [
    ToggleClassDirective
  ],
  exports:[
    ToggleClassDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
