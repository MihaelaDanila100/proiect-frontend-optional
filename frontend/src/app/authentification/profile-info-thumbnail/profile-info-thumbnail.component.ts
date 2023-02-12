import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Thumbnail } from 'src/app/interfaces/thumbnail';

@Component({
  selector: 'app-profile-info-thumbnail',
  templateUrl: './profile-info-thumbnail.component.html',
  styleUrls: ['./profile-info-thumbnail.component.css']
})
export class ProfileInfoThumbnailComponent implements OnInit {

  @Input() thumbnail_card!: Thumbnail;
  @Output() onBtnClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(){
    this.onBtnClicked.emit(this.thumbnail_card.imgSource);
  }

}
