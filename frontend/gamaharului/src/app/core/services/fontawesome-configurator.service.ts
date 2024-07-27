import { Injectable } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PropertiesService } from './properties.service';

/**
 * Icons added to the library will be available everywhere in the application and can be referenced just by their name
 *
 * https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage/icon-library.md#using-the-icon-library
 */
@Injectable({
  providedIn: 'root',
})
export class FontawesomeConfiguratorService {
  /** */
  constructor(
    private faConfig: FaConfig,
    private library: FaIconLibrary,
    private props: PropertiesService,
  ) {}

  /** */
  init() {
    // Changing the default prefix
    if (this.props.has('fontawesome.defaultPrefix')) {
      this.faConfig.defaultPrefix = this.props.get('fontawesome.defaultPrefix');
    }

    // Apply fixed width by default
    if (this.props.has('fontawesome.fixedWidth')) {
      this.faConfig.fixedWidth = this.props.get('fontawesome.fixedWidth');
    }

    // Import entire icon styles.
    // This way of importing icons does not support tree-shaking,
    // so all icons from the imported package will end up in the bundle.
    this.library.addIconPacks(fas, far); // fab);
  }
}
