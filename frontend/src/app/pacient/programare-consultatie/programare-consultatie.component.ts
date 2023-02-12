import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { TransmitePacientService } from 'src/app/services/transmite-pacient.service';
import { RoutePathsService } from 'src/app/services/route-paths.service';

@Component({
  selector: 'app-programare-consultatie',
  templateUrl: './programare-consultatie.component.html',
  styleUrls: ['./programare-consultatie.component.css']
})
export class ProgramareConsultatieComponent implements OnInit {

  constructor(private service:ApiCrudService, private activatedRoute:ActivatedRoute,
    private transmitePacient:TransmitePacientService, private routePaths:RoutePathsService) { }

  errormsg: any;
  pacient!: any;

  ngOnInit(): void {
    this.pacient = this.transmitePacient.getPacient();
  }

  programareForm = new FormGroup({
    'data': new FormControl('', Validators.required),
    'simptome': new FormControl('', Validators.required)
  });

  programareSubmit(){
    if(this.programareForm.valid){
      console.log(this.programareForm.value);
      this.service.createConsultatie(this.pacient, this.programareForm.value).subscribe((res)=>{
        console.log(res);
      });
      this.routePaths.goToPacient(this.pacient);
    }else{
      console.log(this.programareForm.value);
      //console.log(this.findInvalidControls());
      this.errormsg = 'Campuri completate incorect';
    }
  }
  

}
