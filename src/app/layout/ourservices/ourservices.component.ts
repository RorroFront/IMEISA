import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageChangeService } from '../../header/languagechange.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ourservices',
  imports: [CommonModule, TranslateModule],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css'
})
export class OurservicesComponent  {

  constructor(){}

 






 

  viewPdf(){
    console.log('abrir pdf')
    window.open('/assets/PDF/2025_IMEISA.pdf');
  }

}
