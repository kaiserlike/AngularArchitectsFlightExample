/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { LogFormatterService } from './log-formatter.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DefaultLogFormatterService implements LogFormatterService {

  constructor() { }

  format(message: string): string {
    return message;
  }
}
