import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  darkTheme!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.darkTheme = false;
  }

  toggleDarkTheme(){
    this.darkTheme = !this.darkTheme;
    if(this.darkTheme == false){
      localStorage.removeItem("darktheme");
    }else{
      localStorage.setItem("darktheme", JSON.stringify("darktheme"));
    }
  }

}
