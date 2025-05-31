import { Component } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  imports: [],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent {

  viewPdf(){
    console.log('abrir pdf')
    window.open('/assets/PDF/2025_IMEISA.pdf');
  }

}
