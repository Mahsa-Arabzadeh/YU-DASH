import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WidgetDataService } from '../../services/widget-data.service';
import { WidgetType } from '../../models/dashboard.model';
import { Chart, ChartTypeRegistry } from 'chart.js/auto';
import { LastActivityDateService } from '../../services/last-activity-date.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  allWidgets: WidgetType[] = [];
  chart: any;
  @Input() chartType!: keyof ChartTypeRegistry;
  @ViewChild('MyChart')
  myChart!: ElementRef<HTMLCanvasElement>;

  constructor(
    private widgetDataService: WidgetDataService,
    private lastActivityDataService: LastActivityDateService
  ) {}

  ngOnInit(): void {
    this.widgetDataService.allWidgets$.subscribe((res) => {
      this.allWidgets = res;
      if (this.allWidgets.length > 0 && this.myChart) {
        this.createChart();
      }
    });
  }

  createChart() {
    const labels = this.allWidgets.map((widget) => widget.label);
    const interaction = this.allWidgets.map((widget) => widget.interaction);
    const progress = this.allWidgets.map((widget) => widget.progress);
    const colors = this.allWidgets.map((widget) => widget.backgroundColor);

    this.chart = new Chart(this.myChart.nativeElement, {
      type: this.chartType,
      data: {
        labels:
          this.chartType === 'doughnut'
            ? labels
            : this.lastActivityDataService.getTwentyEightLastDays(),
        datasets: [
          {
            data:
              this.chartType === 'doughnut'
                ? interaction
                : [...interaction, ...progress],
            backgroundColor: colors,
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }
}
