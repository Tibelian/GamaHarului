import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { decodeHttpStatus, HTTP_RESPONSE_STATUS } from '../utils/http-codes';
import { LoggerService } from './logger.service';
import { PropertiesService } from './properties.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  /** */
  private http: HttpClient = inject(HttpClient);

  /** */
  private properties: PropertiesService = inject(PropertiesService);

  /** */
  private logger: LoggerService = inject(LoggerService);

  /** */
  private get baseUrl(): string {
    return this.properties.get('api.baseUrl');
  }
  /**
   * Creates an "http request options" object based on the specified parameters.
   *
   * @param searchParameters  The HTTP request search parameters. See `HttpParams` for details
   * @param responseType  An optional specific response type for the request (`'arraybuffer'`, `'blob'`, `'json'`, `'text'). Defalt value is `'json'`
   * @param observe Specifies how much of the response to return (`'body'`, `'response'`, `'events'`). Default value is `'body'`
   * @returns  An object containing the request options.
   *           See {@link https://angular.io/guide/http#configuring-the-request} for details.
   * @see https://angular.io/guide/http#requesting-data-from-a-server
   */
  static createRequestOptions(
    searchParameters: any,
    responseType = 'json',
    observe = 'body',
  ): any {
    let requestParameters = new HttpParams();
    if (searchParameters) {
      for (const key of Object.keys(searchParameters)) {
        const value = searchParameters[key];
        if (value !== null && typeof value !== 'undefined') {
          // array type search parameters (multivalued)
          if (Array.isArray(value)) {
            value.forEach((element) => {
              requestParameters = requestParameters.append(key, element);
            });
            // non-array type search parameters (single value)
          } else {
            requestParameters = requestParameters.set(key, value);
          }
        }
      }
    }
    return {
      params: requestParameters,
      responseType,
      observe,
    };
  }

  /**
   * Sets up the fixed options for HTTP requests invoked via this service,
   * that will be added to the request options demanded by the user of this service.
   *
   * @param options  The HTTP request options demanded by the user of this service.
   * @returns The updated object to be used by this service's HTTP requests.
   */
  private updateOptions(options?: any): any {
    options = !options ? {} : options;

    // The 'withCredentials' option indicates whether or not cross-site Access-Control requests should
    // be made using credentials such as cookies or authorization headers. The default is false.
    // Note: This never affects same-site requests.
    options.withCredentials = true;

    // empty headers
    if (!options.headers) {
      options.headers = new HttpHeaders();
    }

    // empty parameters
    if (!options.params) {
      options.params = new HttpParams();
    }

    return options;
  }

  /**
   * Performs a `get` HTTP request to the
   *
   * @param endPointURL  Relative URL of the service, **including the service name and method**.
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  get<T>(endPointURL: string, options?: any): Observable<T> {
    return this.doRequest<T>('GET', endPointURL, null, options);
  }

  /**
   * Performs a `post` HTTP request
   *
   * @param endPointURL  Relative URL of the service
   * @param body  The body to be included in the request (usually in JSON format).
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  post<T>(endPointURL: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>('POST', endPointURL, body, options);
  }

  /**
   * Performs a `put` HTTP request
   *
   * @param endPointURL  Relative URL of the service, **including the service name and method**.
   * @param body  The body to be included in the request (usually in JSON format).
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  put<T>(endPointURL: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>('PUT', endPointURL, body, options);
  }

  /**
   * Performs a `patch` HTTP request
   *
   * @param endPointURL  Relative URL of the service, **including the service name and method**.
   * @param body  The body to be included in the request (usually in JSON format).
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  patch<T>(endPointURL: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>('PATCH', endPointURL, body, options);
  }

  /**
   * Performs a `delete` HTTP request
   *
   * @param endPointURL  Relative URL of the service, **including the service name and method**.
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  delete<T>(endPointURL: string, options?: any): Observable<T> {
    return this.doRequest<T>('DELETE', endPointURL, null, options);
  }

  /**
   * Performs an HTTP request
   * Add custom headers or other request options in this method.
   *
   * @param method  The http request method type: `get`, `put`, `post`, `delete`, `patch`
   * @param endPointURL  Relative URL of the service
   * @param body  The body to be included in the request (usually in JSON format)
   * @param options  The optional HTTP request options, including search parameters.
   *                 Use {@link #createRequestOptions} to get ans instance of this object
   * @returns The response body wrapped as an `Observable` object
   */
  private doRequest<T>(
    method: string,
    endPointURL: string,
    body: any,
    options?: any,
  ): Observable<T | any> {
    const serviceURL = this.baseUrl + endPointURL;
    options = this.updateOptions(options);
    this.logger.info(this, method + ' - ' + serviceURL, options);
    switch (method) {
      case 'GET':
        return this.http
          .get<T>(serviceURL, options)
          .pipe(catchError(this.handleError));
      case 'POST':
        return this.http
          .post<T>(serviceURL, body, options)
          .pipe(catchError(this.handleError));
      case 'PUT':
        return this.http
          .put<T>(serviceURL, body, options)
          .pipe(catchError(this.handleError));
      case 'PATCH':
        return this.http
          .patch<T>(serviceURL, body, options)
          .pipe(catchError(this.handleError));
      case 'DELETE':
        return this.http
          .delete<T>(serviceURL, options)
          .pipe(catchError(this.handleError));
      default:
        return throwError(
          () => new Error('Unsupported http method: ' + method),
        );
    }
  }

  /**
   *
   * @param error
   * @returns
   */
  private handleError(response: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (response.error instanceof ErrorEvent) {
      // client-side or network error
      errorMessage = `Error: ${response.error.message}`;
      this.logger.error(this, response.error.message);
    } else {
      // server-side returned an unsuccessful response code
      errorMessage = `Error Code: ${response.status}\nMessage: ${response.message}`;
      this.logger.error(
        this,
        response.status + ' - ' + decodeHttpStatus(response.status),
        response.error,
      );
    }
    //
    if (response.status === HTTP_RESPONSE_STATUS.UNAUTHORIZED) {
      // TODO
    }
    return throwError(() => new Error(errorMessage));
  }
}
