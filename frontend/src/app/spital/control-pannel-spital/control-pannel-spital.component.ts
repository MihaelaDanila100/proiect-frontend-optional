import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { RoutePathsService } from 'src/app/services/route-paths.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-pannel-spital',
  templateUrl: './control-pannel-spital.component.html',
  styleUrls: ['./control-pannel-spital.component.css']
})
export class ControlPannelSpitalComponent implements OnInit {

  constructor(private service:ApiCrudService,
    private routePaths:RoutePathsService,
    private route:Router) { }

  totiPacientii!: any;
  displayDetails= false;

  ngOnInit(): void {
    this.service.getPacienti().subscribe((res) => {
      this.totiPacientii = res.data
    });
  }

  goToPacient(id: any){
    this.routePaths.goToPacient(id);
  }
  
  accesDosar(id:any){
    this.routePaths.goToPacient(id);
  }

  logOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("tip_cont");
    this.routePaths.goBackHome();
  }

}
