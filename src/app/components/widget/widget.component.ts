import { Component, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

// models:
import { type WidgetType } from '../../models/dashboard';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  data = input.required<WidgetType>();
}
