import { Component, inject, Input, input, model, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { WidgetDataService } from '../../../services/widget-data.service';

@Component({
  selector: 'app-widget-options',
  imports: [ButtonModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.css',
})
export class WidgetOptionsComponent {
  //   data = input.required<WidgetType>();
  showOptions = model<Boolean>(false);
  @Input() id: string = '';

  constructor(private widgetDataService: WidgetDataService) {}

  // func for get remove func from service
  removeWidget(id: string) {
    this.widgetDataService.removeWidget(id);
  }
}
