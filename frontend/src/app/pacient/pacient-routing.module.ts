import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultatieFormComponent } from '../cabinet/consultatie-form/consultatie-form.component';
import { MedicGuard } from '../guards/medic.guard';
import { PrivateGuard } from '../guards/private.guard';
import { DetailsComponent } from './details/details.component';
import { DosarComponent } from './dosar/dosar.component';
import { ProgramareConsultatieComponent } from './programare-consultatie/programare-consultatie.component';

const routes: Routes = [
  {
    path: 'dosar/:id',
    component: DosarComponent,
    canActivate: [PrivateGuard],
    children: [
      {
        path: 'programare',
        component: ProgramareConsultatieComponent,
        canActivate: [PrivateGuard]
      },{
            path: 'consultatie',
            component: ConsultatieFormComponent,
            canActivate: [PrivateGuard, MedicGuard]
          }
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientRoutingModule { }
