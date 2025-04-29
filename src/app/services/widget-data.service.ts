import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WidgetType } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  private widgetDataSubject = new BehaviorSubject<WidgetType[]>([]);
  widgetData$ = this.widgetDataSubject.asObservable();
  private jsonUrl = 'assets/data/widget.json';

  constructor(private http: HttpClient) {}

  getWidgetData() {
    this.http.get<WidgetType[]>(this.jsonUrl).subscribe((res) => {
      this.widgetDataSubject.next(res);
    });
  }

  // remove selected widget
  removeWidget(id: string) {
    const currentData = this.widgetDataSubject.value.filter(
      (data) => data.id !== id
    );
    this.widgetDataSubject.next(currentData);
  }
}
