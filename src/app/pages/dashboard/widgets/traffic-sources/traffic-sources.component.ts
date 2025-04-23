import { Component, ElementRef, viewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-traffic-sources',
  imports: [],
  templateUrl: './traffic-sources.component.html',
  styleUrl: './traffic-sources.component.css',
})
export class TrafficSourcesComponent {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit(): void {
    new Chart(this.chart().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Search', 'Suggested', 'External'],
        datasets: [
          {
            label: 'Viwes',
            data: [100, 102, 105],
            borderColor: '#fff',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(86, 255, 86)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }
}
