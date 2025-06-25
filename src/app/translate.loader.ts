// translate.loader.ts

import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

// Loader para el cliente (navegador)
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


/**
 * Loader para cliente (navegador)
 * Usa HttpClient para cargar archivos JSON desde /assets/i18n/
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


