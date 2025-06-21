import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageChangeService {

  constructor() { }

  language:WritableSignal<'en'|'es'> = signal('es');

  changeLanguage (){
    this.language.set(this.language() === 'en' ? 'es': 'en')
  }

  selectedLanguage = computed(() => this.language());

  

}
