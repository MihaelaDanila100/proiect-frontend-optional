import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { TransmitePacientService } from 'src/app/services/transmite-pacient.service';

@Component({
  selector: 'app-consultatie-form',
  templateUrl: './consultatie-form.component.html',
  styleUrls: ['./consultatie-form.component.css']
})
export class ConsultatieFormComponent implements OnInit {

  constructor(private service:ApiCrudService, private activatedRoute:ActivatedRoute,
    private transmitePacient:TransmitePacientService) { }

  pacient!: any;
  consultatie!: any;

  errormsg: any;

  ngOnInit(): void {
    this.pacient = this.transmitePacient.getPacient();
    this.service.getConsultatiePeAzi(this.pacient).subscribe((res) => {
      this.consultatie = res.data[0]['ID_Consultatie'];
      console.log(this.consultatie);
    });
  }

  consultatieForm = new FormGroup({
    'diagnostic': new FormControl('', Validators.required),
    'simptome': new FormControl('', Validators.required),
    'tratament': new FormControl(''),
    'observatii': new FormControl(''),
    'temperatura': new FormControl(null, Validators.pattern('^\\d+(\.\\d+)?$')),
    'puls': new FormControl(null, Validators.pattern('^\\d+$')),
    'tensiune': new FormControl(null, Validators.pattern('^\\d+(\\.\\d+)?$')),
    'greutate': new FormControl(null, Validators.pattern('^\\d+(\\.\\d+)?$'))
  });
  
  /*public findInvalidControls() {
    const invalid = [];
    const controls = this.consultatieForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}*/

  consultatieSubmit(){
    if(this.consultatieForm.valid){
      console.log(this.consultatieForm.value);
      this.service.editConsultatie(this.consultatie, this.consultatieForm.value).subscribe((res)=>{
        console.log(res,'res==>');
      });
    }else{
      console.log(this.consultatieForm.value);
      //console.log(this.findInvalidControls());
      this.errormsg = 'Campuri completate incorect';
    }
  }

}
