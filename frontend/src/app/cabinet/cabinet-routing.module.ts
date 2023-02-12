import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicGuard } from '../guards/medic.guard';
import { PrivateGuard } from '../guards/private.guard';
import { SpitalGuard } from '../guards/spital.guard';
import { DosarComponent } from '../pacient/dosar/dosar.component';
import { ConsultatieFormComponent } from './consultatie-form/consultatie-form.component';
/*import { ConsultatieFormComponent } from './consultatie-form/consultatie-form.component';*/
import { ControlPannelComponent } from './control-pannel/control-pannel.component';

const routes: Routes = [
  {
    path: 'control-pannel/:id',
    component: ControlPannelComponent,
    canActivate: [PrivateGuard, MedicGuard],
    children: [
      {
        path: 'pacient/:id',
        component: DosarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
