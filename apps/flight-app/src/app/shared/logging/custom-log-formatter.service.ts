/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { LogFormatterService } from '@flight-workspace/logger-lib';

@Injectable({
  providedIn: 'root'
})
export class CustomLogFormatterService implements LogFormatterService {

  constructor() { }

  format(message: string): string {
    const now = new Date().toISOString();
        return `[${now}] ${message}`;
  }
}
