import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from './api-crud.service';

@Injectable({
  providedIn: 'root'
})
export class RoutePathsService {

  constructor(private router:Router, private crudService:ApiCrudService) { }

  goBackHome(){
    this.router.navigate(['/home']);
  }

  goToLoginForm(){
    this.router.navigate(['/home/login']);
  }

  goToPacient(id:any){
    this.router.navigate([`/pacient/dosar/${id}`]);
  }

  goToSignUp(){
    this.router.navigate(['/home/signup']);
  }

  goToPannel(nume:any){
    var id_pacient;

    this.crudService.getIDPacientByNume(nume).subscribe((res) => {
      console.log(res.data,'dataaaa');
      id_pacient = res.data[0]['ID_Pacient'];
      if(localStorage.getItem("tip_cont") == JSON.stringify("pacient")){
        this.router.navigate([`/pacient/dosar/${id_pacient}`]);
      }
     /* if(localStorage.getItem("tip_cont")?.toString() == "pacient"){
        id_pacient = res.data[0]['ID_Pacient'];
        this.router.navigate([`/pacient/dosar/${id_pacient}`]);
      }else{
        console.log(localStorage.getItem("tip_cont"), "cont===");
      }*/
    });
  }

  goToPannelMedic(nume:any){
    var id_medic;
    this.crudService.getIDMedicUsername(nume).subscribe((res) => {
      console.log(res.data, "dataaaa");
      id_medic = res.data[0]['ID_Medic_familie'];
      console.log(id_medic, "id_medic");
      this.router.navigate([`/cabinet/control-pannel/${id_medic}`]);
    });
  }

  goToHospitalPannel(){
    this.router.navigate(['/spital']);
  }

  goToConsultatie(id:any){
    this.router.navigate([`/pacient/dosar/${id}/programare`]);
  }

  goToConsultatieDoctor(id:any){
    this.router.navigate([`pacient/dosar/${id}/consultatie`]);
  }
}
