import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LastActivityDateService {
  constructor() {}

  getTwentyEightLastDays() {
    const labels: string[] = [];
    const today = new Date();

    for (let i = 28; i > 0; i -= 5) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formatted = date.toISOString().split('T')[0];
      labels.push(formatted);
    }

    return labels;
  }
}
