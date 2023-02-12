import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { DirectivesModule } from '../directives/directives.module';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    SideMenuComponent
  ],
  exports: [
    MainHeaderComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class HeadersModule { }
