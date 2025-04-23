import { Component, ElementRef, input, OnInit, signal } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
// models:
import { type WidgetType } from '../../models/dashboard.model';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';

@Component({
  selector: 'app-widget',
  imports: [
    NgComponentOutlet,
    MatButtonModule,
    MatIcon,
    WidgetOptionsComponent,
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent implements OnInit {
  data = input.required<WidgetType>();
  showOptions = signal(false);

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    const gridArea = `span ${this.data().rows ?? 1} / span ${
      this.data().columns ?? 1
    }`;
    this.host.nativeElement.style.gridArea = gridArea;
  }
}
