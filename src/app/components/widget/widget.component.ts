import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget-container',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetContainerComponent {
  //   data = input.required<WidgetType>();
  //   showOptions = signal(false);
  //   constructor(private host: ElementRef) {}
  //   ngOnInit(): void {
  //     const gridArea = `span ${this.data().rows ?? 1} / span ${
  //       this.data().columns ?? 1
  //     }`;
  //     this.host.nativeElement.style.gridArea = gridArea;
  //   }

  @Input() label: string = '';
  @Input() backgroundColor: string = '';
  @Input() color: string = '';
}
