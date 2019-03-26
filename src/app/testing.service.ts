import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  someText = 'Hello world';
  testEvent = new EventEmitter<number>();
  constructor() { }
}
