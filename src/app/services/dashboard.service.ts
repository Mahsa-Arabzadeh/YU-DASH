import { computed, effect, Injectable, signal } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { WidgetType } from '../models/dashboard.model';
import { WatchTimeComponent } from '../pages/dashboard/widgets/watch-time/watch-time.component';
import { RevenueComponent } from '../pages/dashboard/widgets/revenue/revenue.component';
import { AnalitycsComponent } from '../pages/analitycs/analitycs.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private widgets = signal<WidgetType[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003F5C',
      color: 'whitesmoke',
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003F5C',
      color: 'whitesmoke',
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTimeComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003F5C',
      color: 'whitesmoke',
    },
    {
      id: 4,
      label: 'Revenue',
      content: RevenueComponent,
      rows: 1,
      columns: 1,
      backgroundColor: '#003F5C',
      color: 'whitesmoke',
    },
    {
      id: 5,
      label: 'Channel Analytics',
      content: AnalitycsComponent,
      rows: 2,
      columns: 2,
    },
  ]);

  private addedWidgets = signal<WidgetType[]>([]);

  private widgetToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  updateWidget(id: number, widget: Partial<WidgetType>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);

    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

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

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];

    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];

    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter((w) => w.id !== id));
  }

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<WidgetType>[] =
      this.addedWidgets().map((w) => ({ ...w }));
    widgetsWithoutContent.forEach((w) => {
      delete w.content;
    });

    localStorage.setItem(
      'dashboardWidgets',
      JSON.stringify(widgetsWithoutContent)
    );
  });

  fetchWidgets() {
    const widgetAsString = localStorage.getItem('dashboardWidgets');
    if (widgetAsString) {
      const widgets = JSON.parse(widgetAsString) as WidgetType[];
      widgets.forEach((widget) => {
        const content = this.widgets().find((w) => w.id === widget.id)?.content;
        if (content) {
          widget.content = content;
        }
      });

      this.addedWidgets.set(widgets);
    }
  }

  constructor() {
    this.fetchWidgets();
  }
}
