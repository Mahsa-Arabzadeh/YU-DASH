import { Injectable, signal } from '@angular/core';
import { WidgetType } from '../models/dashboard';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  widgets = signal<WidgetType[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
    },
  ]);

  constructor() {}

  getItems() {
    return this.widgets();
  }
}
