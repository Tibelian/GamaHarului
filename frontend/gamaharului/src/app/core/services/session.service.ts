import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  /** */
  private _authenticatedUser!: AuthenticatedUser;

  /** */
  public get authenticatedUser(): AuthenticatedUser | null {
    this.checkLocalStorage();
    return this._authenticatedUser;
  }

  /** */
  private checkLocalStorage() {
    if (this._authenticatedUser == null) {
      const prev = localStorage.getItem('loggedIn');
      if (prev != null) {
        this._authenticatedUser = JSON.parse(prev);
      }
    }
  }

  constructor() {}
}
