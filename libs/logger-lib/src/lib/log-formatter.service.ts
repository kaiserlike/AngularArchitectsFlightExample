/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class LogFormatterService {
  abstract format(message: string): string;

  constructor() { }
}
