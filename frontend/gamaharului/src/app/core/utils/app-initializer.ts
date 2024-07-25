import { APP_INITIALIZER, Provider } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

export function provideAppInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [PropertiesService],
    useFactory: initialize,
  };
}

function initialize(props: PropertiesService) {
  return () => {
    console.log('Loading application configuration...');
    return props.loadConfig();
  };
}
