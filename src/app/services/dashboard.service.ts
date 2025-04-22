import { computed, Injectable, signal } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { WidgetType } from '../models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private widgets = signal<WidgetType[]>([
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

  private addedWidgets = signal<WidgetType[]>([]);

  private widgetToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  constructor() {}

  addWidget(w: WidgetType): void {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  getItems(): WidgetType[] {
    return this.widgets();
  }

  getAddedWidgets(): WidgetType[] {
    return this.addedWidgets();
  }

  getWidgetsToAdd(): WidgetType[] {
    return this.widgetToAdd();
  }
}
