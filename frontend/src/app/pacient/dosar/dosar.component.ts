import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { ActivatedRoute } from '@angular/router';
import { TransmitePacientService } from 'src/app/services/transmite-pacient.service';
import { RoutePathsService } from 'src/app/services/route-paths.service';

@Component({
  selector: 'app-dosar',
  templateUrl: './dosar.component.html',
  styleUrls: ['./dosar.component.css']
})
export class DosarComponent implements OnInit {

  constructor(private apiCrud:ApiCrudService,
    private activatedRoute:ActivatedRoute,
    private transmitePacient:TransmitePacientService,
    private routePaths:RoutePathsService) { }

  pacient!: any;
  detaliiPacient!: any;
  consultatiiPacient!: any;
  spitalizariPacient!: any;
  interventiiPacient!: any;
  investigatiiPacient!: any;
  contDoctor!: any;
  @Output() onDisplayDetails: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    if(localStorage.getItem("tip_cont") == JSON.stringify("medic")){
      this.contDoctor = true;
    }else{
      this.contDoctor = false;
    }
    
    this.pacient = this.activatedRoute.snapshot.paramMap.get("id");

    this.transmitePacient.setPacient(this.pacient);
    
    this.apiCrud.getPacient(this.pacient).subscribe((res)=>{
      
      this.detaliiPacient = res.data[0];

    });

    this.apiCrud.getConsultatiiPacient(this.pacient).subscribe((res)=>{
      this.consultatiiPacient = res.data;
    });

    this.apiCrud.getSpitalizariPacient(this.pacient).subscribe((res) => {
      this.spitalizariPacient = res.data;
    });

    this.apiCrud.getInterventiiPacient(this.pacient).subscribe((res) => {
      this.interventiiPacient = res.data;
      console.log(this.interventiiPacient);
    });

    this.apiCrud.getInvestigatiiPacient(this.pacient).subscribe((res) => {
      this.investigatiiPacient = res.data;
    });
  }

  activatedDetails: boolean = false;

  activateDetails(){
    this.activatedDetails = true;
  }

  goBackToDoctorPannel(){
    let doctor: any;
    if(localStorage.getItem("user")!=null){
      doctor = localStorage.getItem("user");
    }
    /*this.routePaths.goToPannelMedic(JSON.parse());*/
  }

  deactivateDetails(activ:any){
    this.activatedDetails = activ;
  }

  clickBtn(){
    this.onDisplayDetails.emit(this.pacient);
  }

  goToConsultatie(){
    
    this.routePaths.goToConsultatie(this.pacient);
  }

  goToConsultatieDoctor(){
    this.routePaths.goToConsultatieDoctor(this.pacient);
  }

  logOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("tip_cont");
    this.routePaths.goBackHome();
  }

}
