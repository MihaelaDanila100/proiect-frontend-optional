import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileOptionsComponent } from './profile-options/profile-options.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path:'',
    component: ProfileOptionsComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent
      },{
        path: 'signup',
        component: SignUpFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
