// Loader para el servidor (Node.js)
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';


import * as fs from 'fs';
import * as path from 'path';


/**
 * Loader para servidor (SSR)
 * Usa Node.js fs para leer archivos desde el sistema de archivos local
 */
export class TranslateFsLoader implements TranslateLoader {
    constructor(
      private prefix = 'public/assets/i18n/',
      private suffix = '.json'
    ) {}
  
    getTranslation(lang: string): Observable<any> {
      try {
        const filePath = path.join(process.cwd(), this.prefix, `${lang}${this.suffix}`);
        const data = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(data);
        return of(parsed);
      } catch (err) {
        console.error(`Error cargando traducción para '${lang}':`, err);
        return of({}); // fallback vacío si ocurre error
      }
    }
  }