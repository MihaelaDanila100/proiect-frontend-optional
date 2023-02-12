import { Component, OnInit, Output } from '@angular/core';
import { Thumbnail } from 'src/app/interfaces/thumbnail';
import { RoutePathsService } from 'src/app/services/route-paths.service';
import { SendImagePathService } from 'src/app/services/send-image-path.service';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.css']
})
export class ProfileOptionsComponent implements OnInit {

  public thumbnail_cards: Thumbnail[] = [
    {
      imgSource: 'assets/images/client.jpg',
      title: 'Spital',
      description: 'Intra in cont ca medic de spital pentru a vedea '
    },
    {
      imgSource: 'assets/images/thumbnail_profile/doctor.png',
      title: 'Cabinet',
      description: 'Intra in cont ca medic de familie pentru a vedea '
    },
    {
      imgSource: 'assets/images/thumbnail_profile/patient.png',
      title: 'Pacient',
      description: 'Intra in cont ca pacient pentru a vedea '
    }
  ];

  constructor(private routePathsService: RoutePathsService,
    private sendImage:SendImagePathService) { }

  ngOnInit(): void {
    
  }

  showForm(img:string){
    this.sendImage.setSelectedAccount(img);
    this.routePathsService.goToLoginForm();
  }

}
