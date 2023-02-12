import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private http:HttpClient) { }

  apiUrl = 'http://localhost:3001';

  getPacienti():Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti`);
  }

  getPacientiMedic(id_medic:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id_medic}/pacienti_medic`);
  }

  getPacient(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}`);
  }

  getConsultatiiPacient(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}/consultatii`);
  }

  getSpitalizariPacient(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}/spitalizari`);
  }
  
  getInvestigatiiPacient(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}/investigatii`);
  }

  getInterventiiPacient(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}/interventii`);
  }

  editConsultatie(id:any, data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/pacienti/${id}/consultatie`, data);
  }

  createConsultatie(id:any, data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/pacienti/${id}/programare`, data);
  }

  getConsultatiePeAzi(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacienti/${id}/consultatie_azi`);
  }

  getMedic(nume:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/medic/${nume}`);
  }

  getIDMedicUsername(username:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/medic_username/${username}`);
  }

  signUp(id:any, data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/signup/${id}`, data);
  }

  getIDPacientByNume(nume:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/pacient/${nume}`);
  }

  getPassowrdPacient(username:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/login/${username}`);
  }

  getPasswordMedic(username:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/login_doctor/${username}`);
  }

  getIDSpital(username:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/login_spital/${username}`);
  }
}
