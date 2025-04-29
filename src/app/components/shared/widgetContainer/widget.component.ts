import { Component, ElementRef, Input, OnInit, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from '../../widget/widget-options/widget-options.component';

@Component({
  selector: 'app-widget-container',
  imports: [MatButtonModule, MatIcon, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetContainerComponent implements OnInit {
  showOptions = signal(false);

  @Input() label: string = '';
  @Input() backgroundColor: string = '';
  @Input() color: string = '';
  @Input() rows: number = 1;
  @Input() columns: number = 1;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const gridArea = `span ${this.rows ?? 1} / span ${this.columns ?? 1}`;
    this.el.nativeElement.style.gridArea = gridArea;
  }
}
