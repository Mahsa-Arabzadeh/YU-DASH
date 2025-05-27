import { Injectable, signal } from '@angular/core';
import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleStateService {
  private collapse = new BehaviorSubject(false);
  collapseValue = this.collapse.asObservable();

  chart = new BehaviorSubject<Chart | null>(null);
  chartValue$ = this.chart.asObservable();

  constructor() {}

  setChart(char: Chart) {
    this.chart.next(char);
  }

  getChart(): Chart | null {
    return this.chart.getValue();
  }

  toggleMenu() {
    const currnetValue = this.collapse.getValue();
    this.collapse.next(!currnetValue);
  }
}
