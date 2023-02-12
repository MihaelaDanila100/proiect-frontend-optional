import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() pacient!: any;
  @Output() onCloseClicked: EventEmitter<boolean> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  clickClose(){
    this.onCloseClicked.emit(false);
  }

}
