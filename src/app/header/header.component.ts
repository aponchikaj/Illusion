import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNormal:boolean = true;
  isMenu:boolean = false;

  openMenu(){
    this.isNormal = false;
    this.isMenu = true;
  }

  CloseMenu(){
    this.isNormal = true;
    this.isMenu = false;
  }
}
