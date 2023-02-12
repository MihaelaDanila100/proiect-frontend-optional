import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmitePacientService {

  private pacient!: any;

  constructor() { }

  setPacient(id:string){
    this.pacient = id;
  }

  getPacient(){
    return this.pacient;
  }
}
