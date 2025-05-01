import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WidgetType } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  private widgetDataSubject = new BehaviorSubject<WidgetType[]>([]);
  private allWidgetsSubject = new BehaviorSubject<WidgetType[]>([]);

  widgetData$ = this.widgetDataSubject.asObservable();
  allWidgets$ = this.allWidgetsSubject.asObservable();

  private jsonUrl = 'assets/data/widget.json';

  constructor(private http: HttpClient) {
    this.loadAllWidgets();
  }

  loadAllWidgets() {
    this.http.get<WidgetType[]>(this.jsonUrl).subscribe((res) => {
      this.allWidgetsSubject.next(res);
    });
  }

  loadWidgets() {
    const storedData = localStorage.getItem('dashboardWidgets');
    if (storedData) {
      const widgets = JSON.parse(storedData) as WidgetType[];
      this.widgetDataSubject.next(widgets);
    } else {
      this.http.get<WidgetType[]>(this.jsonUrl).subscribe((res) => {
        this.widgetDataSubject.next(res);
        this.saveWidgets();
      });
    }
  }

  addWidget(widget: WidgetType) {
    const current = this.widgetDataSubject.value;
    this.widgetDataSubject.next([...current, widget]);
    this.saveWidgets();
  }

  removeWidget(id: string) {
    const updated = this.widgetDataSubject.value.filter((w) => w.id !== id);
    this.widgetDataSubject.next(updated);
    this.saveWidgets();
  }

  saveWidgets() {
    localStorage.setItem(
      'dashboardWidgets',
      JSON.stringify(this.widgetDataSubject.value)
    );
  }
}
