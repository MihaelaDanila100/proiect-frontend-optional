import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersModule } from './headers/headers.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiCrudService } from './services/api-crud.service';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeadersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
