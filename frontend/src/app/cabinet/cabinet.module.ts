import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing.module';
import { ControlPannelComponent } from './control-pannel/control-pannel.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeadersModule } from '../headers/headers.module';
import { PacientModule } from '../pacient/pacient.module';
import { PanouPacientiComponent } from './panou-pacienti/panou-pacienti.component';
import { ConsultatieFormComponent } from './consultatie-form/consultatie-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ControlPannelComponent,
    CalendarComponent,
    PanouPacientiComponent,
    ConsultatieFormComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    HeadersModule,
    PacientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CabinetModule { }
