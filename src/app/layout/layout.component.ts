import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OurservicesComponent } from "./ourservices/ourservices.component";
import { UsComponent } from "./us/us.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    RouterOutlet,
    OurservicesComponent,
    UsComponent,
    ClientsComponent,
    ContactComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
