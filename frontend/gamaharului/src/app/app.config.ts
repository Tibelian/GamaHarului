import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { routes } from './app.routes';
import { provideAppInitializer } from './core/utils/app-initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      LoggerModule.forRoot({
        level: NgxLoggerLevel.INFO, // TODO: load logger level from propertiesService.get('app.logLevel')
      }),
    ),
    provideAppInitializer(),
  ],
};
