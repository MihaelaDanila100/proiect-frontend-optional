import { Component, Input, OnInit } from '@angular/core';
import { SendImagePathService } from 'src/app/services/send-image-path.service';
import { RoutePathsService } from 'src/app/services/route-paths.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  imgSource!: string;
  contDePacient = false;
  contDeDoctor = false;

  public error: boolean | string = false;

  constructor(private sendImage:SendImagePathService,
    private routePaths:RoutePathsService, private apiCrud: ApiCrudService) { }

  ngOnInit(): void {
    this.imgSource = this.sendImage.getSelectedAccount();
    if(this.imgSource.includes('patient')){
       this.contDePacient = true;
       this.contDeDoctor = false;
    }
    if(this.imgSource.includes('doctor')){
       this.contDeDoctor = true;
       this.contDePacient = false;
    }
  }

  goHome(){
    this.routePaths.goBackHome();
  }

  goToSignUp(){
    this.routePaths.goToSignUp();
  }

  loginForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  doLogin(){
    this.error = false;
    if(this.loginForm.valid){

      let parola;

      if(this.contDePacient == true){
      
        this.apiCrud.getPassowrdPacient(this.loginForm.controls['username'].value).subscribe((res) => {
          parola = res.data[0]['password'];
  
          if(parola == this.loginForm.controls['password'].value){
            
            localStorage.setItem("user", JSON.stringify(this.loginForm.controls['username'].value));
            localStorage.setItem("tip_cont", JSON.stringify("pacient"));
            this.routePaths.goToPannel(this.loginForm.controls['username'].value);
          }else{
            this.error = "Parola sau username incorecte";
          }
        });
      }else{
        if(this.contDeDoctor == true){
      
          this.apiCrud.getPasswordMedic(this.loginForm.controls['username'].value).subscribe((res) => {
            parola = res.data[0]['password'];
    
            if(parola == this.loginForm.controls['password'].value){
              localStorage.setItem("user", JSON.stringify(this.loginForm.controls['username'].value));
              localStorage.setItem("tip_cont", JSON.stringify("medic"));
              this.routePaths.goToPannelMedic(this.loginForm.controls['username'].value);
            }else{
              this.error = "Parola sau username incorecte";
              console.log(this.error);
            }
          });
        }else{
      
          this.apiCrud.getIDSpital(this.loginForm.controls['username'].value).subscribe((res) => {
            parola = res.data[0]['ID_Spital'];
            console.log(res.data);
            if(parola == this.loginForm.controls['password'].value){
              localStorage.setItem("user", JSON.stringify(this.loginForm.controls['username'].value));
              localStorage.setItem("tip_cont", JSON.stringify("spital"));
              console.log("sunt spital");
              this.routePaths.goToHospitalPannel();
            }else{
              this.error = "Parola sau username incorecte";
            }
          });
        }
      }
    }
  }

}
