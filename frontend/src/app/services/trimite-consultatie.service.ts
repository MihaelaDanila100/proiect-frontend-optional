import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrimiteConsultatieService {

  private consultatie!: any;

  constructor() { }

  setConsultatie(id:string){
    this.consultatie = id;
  }

  getConsultatie(){
    return this.consultatie;
  }
}
