import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  /** */
  private config: any = {};

  /** */
  private http: HttpClient = inject(HttpClient);

  /**
   *
   * @returns
   */
  loadConfig(): Observable<any> {
    return this.http.get('/assets/config.json').pipe(
      tap((config) => {
        console.log('Configuration loaded successfully', config);
        this.config = { ...config };
      }),
      catchError(this.handleError),
    );
  }

  /**
   * Acceso a las variables anidadas
   * @param key
   * @returns
   */
  get(key: string, delimiter = '.'): any {
    if (!this.config) {
      throw new Error('Config has not been loaded yet.');
    }

    return key
      .split(delimiter)
      .reduce((o, i) => (o && o[i] !== 'undefined' ? o[i] : null), this.config);
  }

  /**
   *
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error loading config: ', error);
    return throwError(() => new Error(error.message));
  }
}
