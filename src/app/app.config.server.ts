
//*app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateFsLoader } from './translate.loader.server';

export function fsLoaderFactory(): TranslateLoader {
  return new TranslateFsLoader('public/assets/i18n/', '.json');
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: fsLoaderFactory,
          deps: []
        }
      })
    )
  ]
};



export const config = mergeApplicationConfig(appConfig, serverConfig);
