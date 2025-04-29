import { Component, inject, Input, input, model } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-widget-options',
  imports: [ButtonModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.css',
})
export class WidgetOptionsComponent {
  //   data = input.required<WidgetType>();
  showOptions = model<Boolean>(false);
}
