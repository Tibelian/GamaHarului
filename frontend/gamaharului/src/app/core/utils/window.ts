import { InjectionToken } from '@angular/core';

/**
 * When using Server side rendering (SSR) and/or prerendering,
 * the app will run on a node environment where the global window object isn't defined.
 *
 * This way, you can keep the benefits of SSR and prerendering and use the window object.
 * https://stackoverflow.com/questions/77514292/angular-17-window-not-defined
 */
export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if (typeof window !== 'undefined') {
      return window;
    }
    return new Window();
  },
});
