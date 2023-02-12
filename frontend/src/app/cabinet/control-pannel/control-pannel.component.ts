import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { RoutePathsService } from 'src/app/services/route-paths.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css']
})
export class ControlPannelComponent implements OnInit {

  optiuniMeniu: string[] = [
    'Logout'
  ];

  pacienti!: any;
  id_medic!: any;

  constructor(private service:ApiCrudService, private routerPaths:RoutePathsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_medic = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getPacientiMedic(this.id_medic).subscribe((res) => {
      console.log(res.data);
      this.pacienti = res.data;
    });
  }

  logOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("tip_cont");
    this.routerPaths.goBackHome();
  }

  goToDetalii(id:any){
    this.routerPaths.goToPacient(id);
  }
}
