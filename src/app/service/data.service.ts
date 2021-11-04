import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private valueSubject = new BehaviorSubject<any>('initial');

  get valueChanges(): any {
    return this.valueChanges.asObservable();
  }

  setValue(value: any) {
    this.valueSubject.next(value);
  }


  constructor() { }
}
