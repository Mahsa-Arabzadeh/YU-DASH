import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  private jsonUrl = 'assets/data/widget.json';

  constructor(private http: HttpClient) {}

  getWidgetData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
