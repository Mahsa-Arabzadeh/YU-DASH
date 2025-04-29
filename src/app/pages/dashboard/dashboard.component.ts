import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
// import { WidgetComponent } from '../../components/widget/widget.component';
import { WidgetType } from '../../models/dashboard.model';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { wrapGrid } from 'animate-css-grid';
import { WidgetContainerComponent } from '../../components/shared/widgetContainer/widget.component';
import { WidgetDataService } from '../../services/widget-data.service';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatMenuModule,
    WidgetContainerComponent,
    WidgetComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  widgetData: WidgetType[] = [];

  // addedWidgets: WidgetType[] = [];
  // widgetsToAdd: WidgetType[] = [];
  // dashboard = viewChild.required<ElementRef>('dashboard');

  // constructor(private dashboardService: DashboardService) {}

  // ngOnInit(): void {
  //   this.refreshWidgets();
  //   wrapGrid(this.dashboard().nativeElement, { duration: 300 });
  // }

  // refreshWidgets(): void {
  //   this.widgets = this.dashboardService.getItems();
  //   this.addedWidgets = this.dashboardService.getAddedWidgets();
  //   this.widgetsToAdd = this.dashboardService.getWidgetsToAdd();
  // }

  // addWidget(w: WidgetType): void {
  //   this.dashboardService.addWidget(w);
  //   this.refreshWidgets();
  // }

  constructor(private widgetDataService: WidgetDataService) {}

  ngOnInit(): void {
    this.widgetDataService.widgetData$.subscribe((res) => {
      this.widgetData = res;
    });

    this.widgetDataService.getWidgetData();
  }
}
