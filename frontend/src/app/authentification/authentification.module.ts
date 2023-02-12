import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { ProfileOptionsComponent } from './profile-options/profile-options.component';
import { ProfileInfoThumbnailComponent } from './profile-info-thumbnail/profile-info-thumbnail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileOptionsComponent,
    ProfileInfoThumbnailComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthentificationModule { }
