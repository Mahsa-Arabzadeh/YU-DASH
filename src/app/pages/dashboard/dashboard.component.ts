import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetType } from '../../models/dashboard.model';
import { WidgetDataService } from '../../services/widget-data.service';

import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { WidgetContainerComponent } from '../../components/shared/widgetContainer/widget.component';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    WidgetContainerComponent,
    WidgetComponent,
    MatIcon,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  widgetData: WidgetType[] = [];
  availableWidgets: WidgetType[] = [];

  constructor(private widgetService: WidgetDataService) {}

  ngOnInit(): void {
    this.widgetService.loadWidgets();

    this.widgetService.widgetData$.subscribe((res) => {
      this.widgetData = res;

      this.widgetService.allWidgets$.subscribe((all) => {
        this.availableWidgets = all.filter(
          (w) => !res.find((widget) => widget.id === w.id)
        );
      });
    });
  }

  addWidget(w: WidgetType) {
    this.widgetService.addWidget(w);
  }

  removeWidget(id: string) {
    this.widgetService.removeWidget(id);
  }
}
