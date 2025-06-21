import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageChangeService } from './languagechange.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private languageService:LanguageChangeService, 
  private translate:TranslateService
  ){}

  
  //*Explorar la opcion de observables+signals y usar el pipe ASYNC
  // englishLanguage$ = toObservable(this.english);
  // spanishLanguage$ = toObservable(this.spanish);
  

  languageChange(){
    
    this.languageService.changeLanguage();
    this.translate.use(this.languageService.selectedLanguage());
    
  };
  





  phoneNumber: string = '+52 2223375735';

  closedMenu: boolean = true;


  onClick() {
    this.closedMenu = !this.closedMenu;

    console.log(this.closedMenu)
  }

}
