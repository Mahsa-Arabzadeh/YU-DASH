import { computed, Injectable, signal } from '@angular/core';
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

  addedWidgets = signal<WidgetType[]>([]);

  widgetToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  constructor() {}

  getItems() {
    return this.widgets();
  }
  getAddIds() {
    return this.addedWidgets();
  }
}
