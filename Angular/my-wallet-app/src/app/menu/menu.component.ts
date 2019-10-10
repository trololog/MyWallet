import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuClass:string = "";
  menuOpened:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    if(this.menuOpened) {
      this.menuClass = 'menu-hidden';
    } else {
      this.menuClass = 'menu-list menu-visible';
    }

    this.menuOpened = !this.menuOpened;
  }
}
