import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { WidgetType } from '../../models/dashboard';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent, MatIcon, MatButtonModule, MatMenuModule],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  widgets: WidgetType[] = [];
  addedWidgets: WidgetType[] = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.widgets = this.dashboardService.getItems();
    this.widgets = this.dashboardService.getItems();
  }
}
