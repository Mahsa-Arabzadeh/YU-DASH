import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { WidgetType } from '../../models/dashboard';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  widgets: WidgetType[] = [];
  addedWidgets: WidgetType[] = [];
  widgetsToAdd: WidgetType[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.refreshWidgets();
  }

  refreshWidgets(): void {
    this.widgets = this.dashboardService.getItems();
    this.addedWidgets = this.dashboardService.getAddedWidgets();
    this.widgetsToAdd = this.dashboardService.getWidgetsToAdd();
  }

  addWidget(w: WidgetType): void {
    this.dashboardService.addWidget(w);
    this.refreshWidgets();
  }
}
