import { computed, effect, Injectable, signal } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { WidgetType } from '../models/dashboard.model';
import { WatchTimeComponent } from '../pages/dashboard/widgets/watch-time/watch-time.component';
import { AnalyticsComponent } from '../pages/dashboard/widgets/analytics/analitycs.component';
import { TrafficSourcesComponent } from '../pages/dashboard/widgets/traffic-sources/traffic-sources.component';
import { UserDataComponent } from '../pages/dashboard/widgets/user-data/user-data.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // private widgets = signal<WidgetType[]>([]);
  // private addedWidgets = signal<WidgetType[]>([]);
  // private widgetToAdd = computed(() => {
  //   const addedIds = this.addedWidgets().map((w) => w.id);
  //   return this.widgets().filter((w) => !addedIds.includes(w.id));
  // });
  // updateWidget(id: number, widget: Partial<WidgetType>) {
  //   const index = this.addedWidgets().findIndex((w) => w.id === id);
  //   if (index !== -1) {
  //     const newWidgets = [...this.addedWidgets()];
  //     newWidgets[index] = { ...newWidgets[index], ...widget };
  //     this.addedWidgets.set(newWidgets);
  //   }
  // }
  // addWidget(w: WidgetType): void {
  //   this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  // }
  // getItems(): WidgetType[] {
  //   return this.widgets();
  // }
  // getAddedWidgets(): WidgetType[] {
  //   return this.addedWidgets();
  // }
  // getWidgetsToAdd(): WidgetType[] {
  //   return this.widgetToAdd();
  // }
  // moveWidgetToRight(id: number) {
  //   const index = this.addedWidgets().findIndex((w) => w.id === id);
  //   if (index === this.addedWidgets().length - 1) {
  //     return;
  //   }
  //   const newWidgets = [...this.addedWidgets()];
  //   [newWidgets[index], newWidgets[index + 1]] = [
  //     { ...newWidgets[index + 1] },
  //     { ...newWidgets[index] },
  //   ];
  //   this.addedWidgets.set(newWidgets);
  // }
  // moveWidgetToLeft(id: number) {
  //   const index = this.addedWidgets().findIndex((w) => w.id === id);
  //   if (index === 0) {
  //     return;
  //   }
  //   const newWidgets = [...this.addedWidgets()];
  //   [newWidgets[index], newWidgets[index - 1]] = [
  //     { ...newWidgets[index - 1] },
  //     { ...newWidgets[index] },
  //   ];
  //   this.addedWidgets.set(newWidgets);
  // }
  // removeWidget(id: number) {
  //   this.addedWidgets.set(this.addedWidgets().filter((w) => w.id !== id));
  // }
  // saveWidgets = effect(() => {
  //   const widgetsWithoutContent: Partial<WidgetType>[] =
  //     this.addedWidgets().map((w) => ({ ...w }));
  //   widgetsWithoutContent.forEach((w) => {
  //     delete w.content;
  //   });
  //   localStorage.setItem(
  //     'dashboardWidgets',
  //     JSON.stringify(widgetsWithoutContent)
  //   );
  // });
  // fetchWidgets() {
  //   const widgetAsString = localStorage.getItem('dashboardWidgets');
  //   if (widgetAsString) {
  //     const widgets = JSON.parse(widgetAsString) as WidgetType[];
  //     widgets.forEach((widget) => {
  //       const content = this.widgets().find((w) => w.id === widget.id)?.content;
  //       if (content) {
  //         widget.content = content;
  //       }
  //     });
  //     this.addedWidgets.set(widgets);
  //   }
  // }
  // constructor() {
  //   this.fetchWidgets();
  // }
}
