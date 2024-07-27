import { HttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ImportProvidersSource,
  Provider,
} from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { InitializerService } from '../services/initializer.service';

/** */
export function provideAppInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [InitializerService],
    useFactory: initialize,
  };
}

/** */
export function provideModules(): ImportProvidersSource[] {
  console.log('[SYSTEM] Loading application modules...');
  return [
    //
    LoggerModule.forRoot({
      level: NgxLoggerLevel.INFO, // default conifg is modified inside the InitializerService
    }),

    //
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ];
}

/** */
function initialize(initializer: InitializerService) {
  return (): Promise<any> => initializer.init();
}

/** */
function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
