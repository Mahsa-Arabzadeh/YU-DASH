import { Component, input } from '@angular/core';

// models:
import { type WidgetType } from '../../models/dashboard';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  data = input.required<WidgetType>();
}
