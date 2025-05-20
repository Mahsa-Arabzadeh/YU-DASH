import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleStateService {
  private collapse = new BehaviorSubject(false);
  collapseValue = this.collapse.asObservable();
  constructor() {}

  toggleMenu() {
    const currnetValue = this.collapse.getValue();
    this.collapse.next(!currnetValue);
  }
}
