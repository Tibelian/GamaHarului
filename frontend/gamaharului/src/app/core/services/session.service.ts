import { inject, Injectable } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user.interface';
import { WINDOW } from '../utils/window';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  /** */
  private _authenticatedUser!: AuthenticatedUser;

  /** */
  private window = inject(WINDOW);

  /** */
  public get authenticatedUser(): AuthenticatedUser | null {
    this.checkLocalStorage();
    return this._authenticatedUser;
  }

  /** */
  private checkLocalStorage() {
    if (this._authenticatedUser == null) {
      const prev = this.window.localStorage.getItem('loggedIn');
      if (prev != null) {
        this._authenticatedUser = JSON.parse(prev);
      }
    }
  }

  constructor() {}
}
