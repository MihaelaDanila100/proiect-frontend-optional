import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosarComponent } from '../pacient/dosar/dosar.component';
import { ControlPannelSpitalComponent } from './control-pannel-spital/control-pannel-spital.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'control-pannel',
    pathMatch: 'full'
  },{
    path: 'control-pannel',
    component: ControlPannelSpitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpitalRoutingModule { }
