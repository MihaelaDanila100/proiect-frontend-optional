import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutePathsService } from 'src/app/services/route-paths.service';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private route:RoutePathsService, private service:ApiCrudService) { }

  ngOnInit(): void {
  }

  goHome(){
    this.route.goBackHome();
  }

  errormsg!: any;

  signUpForm = new FormGroup({
    'nume': new FormControl('', Validators.required),
    'prenume': new FormControl('', Validators.required),
    'gen': new FormControl('', Validators.required),
    'data_nasterii': new FormControl('', Validators.required),
    'cnp': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),
    'mail': new FormControl('', Validators.required),
    'sange': new FormControl('', Validators.required),
    'rh': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'cetatenie': new FormControl('', Validators.required),
    'conditii_viata': new FormControl('', Validators.required),
    'conditii_munca': new FormControl('', Validators.required),
    'comportament': new FormControl('', Validators.required),
    'tratamente': new FormControl('', Validators.required),
    'alergii': new FormControl('', Validators.required),
    'intolerante': new FormControl('', Validators.required),
    'inaltime': new FormControl('', Validators.required),
    'nume_medic': new FormControl('', Validators.required)

  });

  medicPacient!: any;

  signUpFormSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value['nume_medic']);

      this.service.getMedic(this.signUpForm.value['nume_medic']).subscribe((res) => {
        this.medicPacient = res.data[0]['ID_Medic_familie'];
        console.log(this.medicPacient);
      })

      this.service.signUp(this.medicPacient, this.signUpForm.value).subscribe((res)=>{
        console.log("bunaaa");
      });
    
      this.route.goToPannel(this.signUpForm.controls['username'].value);
    }else{
      console.log(this.signUpForm.value);
      //console.log(this.findInvalidControls());
      this.errormsg = 'Campuri completate incorect';
      return;
    }
    console.log(this.signUpForm.controls['username'].value);
  }
}
