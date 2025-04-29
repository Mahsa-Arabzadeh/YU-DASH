import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget',
  imports: [MatIcon],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  @Input() iconType: string = '';
  @Input() progress: number = 0;
  @Input() interaction: number = 0;
}
