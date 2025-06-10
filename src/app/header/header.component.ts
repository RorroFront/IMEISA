import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
   phoneNumber:string = '+52 2223375735'

  closedMenu:boolean = true;

  onClick(){
    this.closedMenu = !this.closedMenu;

    console.log(this.closedMenu)
  }

}
