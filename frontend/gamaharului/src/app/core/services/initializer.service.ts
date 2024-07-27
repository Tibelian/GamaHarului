import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { WINDOW } from '../utils/window';
import { FontawesomeConfiguratorService } from './fontawesome-configurator.service';
import { PropertiesService } from './properties.service';

@Injectable({
  providedIn: 'root',
})
export class InitializerService {
  /** */
  private props = inject(PropertiesService);

  /** */
  private translate = inject(TranslateService);

  /** */
  private logger = inject(NGXLogger);

  /** */
  private icons = inject(FontawesomeConfiguratorService);

  /** */
  private window = inject(WINDOW);

  /** */
  public init() {
    return new Promise<void>((resolve, reject) => {
      console.log('[SYSTEM] Initializing application...');
      this.props.loadConfig().subscribe({
        // config success
        complete: () => {
          this.updateLoggerConfig();
          this.icons.init();
          this.initI18n().subscribe({
            // lang success
            complete: () => resolve(),
            // lang error
            error: () => reject(),
          });
        },
        // config error
        error: () => reject(),
      });
    });
  }

  /** */
  private updateLoggerConfig() {
    if (this.props.has('logger')) {
      const settings = this.props.get('logger');
      console.log('[SYSTEM] Applying custom logger settings...', settings);
      this.logger.updateConfig(settings);
    }
  }

  /** Initializes the internationalization (i18n) support */
  private initI18n(): Observable<any> {
    // Add configurated languages in the app
    const langs: string[] = this.props.has('app.language.available')
      ? this.props.get('app.language.available')
      : ['en'];
    this.translate.addLangs(langs);

    // Use language defined in the local storage (if any)
    // otherwise use language defined in app default preferences
    const lang =
      this.window.localStorage?.getItem('language') ||
      this.props.has('apps.language.default')
        ? this.props.get('apps.language.default')
        : 'en';
    console.log('[SYSTEM] Loading "' + lang + '" language...');

    // Enable the language
    this.translate.setDefaultLang(lang);
    return this.translate.use(lang);
  }
}
