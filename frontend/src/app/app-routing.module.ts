import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOptionsComponent } from './authentification/profile-options/profile-options.component';
import { MedicGuard } from './guards/medic.guard';
import { PrivateGuard } from './guards/private.guard';
import { SpitalGuard } from './guards/spital.guard';
import { MainHeaderComponent } from './headers/main-header/main-header.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path:'home',
    loadChildren: () => import('./authentification/authentification.module').then(x => x.AuthentificationModule)
  },{
    path:'cabinet',
    loadChildren: () => import('./cabinet/cabinet.module').then(x => x.CabinetModule)
  },{
    path: 'pacient',
    loadChildren: () => import('./pacient/pacient.module').then(x => x.PacientModule)
  },{
    path: 'spital',
    loadChildren: () => import('./spital/spital.module').then(x => x.SpitalModule),
    canActivate: [PrivateGuard, SpitalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
