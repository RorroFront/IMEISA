import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OurservicesComponent } from "./ourservices/ourservices.component";

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    RouterOutlet,
    OurservicesComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
