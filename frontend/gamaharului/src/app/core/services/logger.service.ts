import { inject, Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PropertiesService } from './properties.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /** Creates an instance of the logger service. */
  private logger: NGXLogger = inject(NGXLogger);

  /** Obtain the environment configuration variables. */
  private properties: PropertiesService = inject(PropertiesService);

  /** Application name */
  private get appName(): string {
    return this.properties.get('app.name') || 'SYSTEM';
  }

  /**
   * Dumps an information message to the console.
   *
   * @param context  Whatever object you want to show in the message as contextual info
   *                 for the message itself (usually `this`, i.e. the caller object).
   * @param message  The text message to be dumped to the console.
   * @param data     Optional additional data to be dumped to the console (usually
   *                 additional debug info).
   */
  info(context: object, message: string, data?: any) {
    if (data) {
      this.logger.info(this.formatMessage(context, message), data);
    } else {
      this.logger.info(this.formatMessage(context, message));
    }
  }

  /**
   * Dumps a warning message to the console.
   *
   * @param context  Whatever object you want to show in the message as contextual info
   *                 for the message itself (usually `this`, i.e. the caller object).
   * @param message  The text message to be dumped to the console.
   * @param data     Optional additional data to be dumped to the console (usually
   *                 additional debug info).
   */
  warning(context: object, message: string, data?: any) {
    if (data) {
      this.logger.warn(this.formatMessage(context, message), data);
    } else {
      this.logger.warn(this.formatMessage(context, message));
    }
  }

  /**
   * Dumps an error message to the console.
   *
   * @param context  Whatever object you want to show in the message as contextual info
   *                 for the message itself (usually `this`, i.e. the caller object).
   * @param message  The text message to be dumped to the console.
   * @param data     Optional additional data to be dumped to the console (usually
   *                 additional debug info).
   */
  error(context: object, message: string, data?: any) {
    if (data) {
      this.logger.error(this.formatMessage(context, message), data);
    } else {
      this.logger.error(this.formatMessage(context, message));
    }
  }

  /**
   * Gives format to the messages dumped by this service.
   * Please add here any message formatting related issue.
   *
   * @param context  Whatever object you want to show in the message as contextual info
   *                 for the message itself (usually `this`, i.e. the caller object).
   * @param message  The text message to be dumped to the console.
   */
  private formatMessage(context: object, message: string) {
    if (context) {
      return `[${this.appName}] - [${context.constructor.name}] - [${message}]`;
    } else {
      return `[${this.appName}] ${message}`;
    }
  }
}
