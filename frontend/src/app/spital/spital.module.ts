import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpitalRoutingModule } from './spital-routing.module';
import { PacientModule } from '../pacient/pacient.module';

import { ControlPannelSpitalComponent } from './control-pannel-spital/control-pannel-spital.component';


@NgModule({
  declarations: [
    ControlPannelSpitalComponent
  ],
  imports: [
    CommonModule,
    SpitalRoutingModule,
    PacientModule
  ]
})
export class SpitalModule { }
