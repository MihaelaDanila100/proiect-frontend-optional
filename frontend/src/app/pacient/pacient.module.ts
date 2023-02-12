import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientRoutingModule } from './pacient-routing.module';
import { DosarComponent } from './dosar/dosar.component';
import { HeadersModule } from '../headers/headers.module';
import { DetailsComponent } from './details/details.component';
import { ProgramareConsultatieComponent } from './programare-consultatie/programare-consultatie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DosarComponent,
    DetailsComponent,
    ProgramareConsultatieComponent
  ],exports:[
    DosarComponent
  ],imports: [
    CommonModule,
    PacientRoutingModule,
    HeadersModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PacientModule { }
