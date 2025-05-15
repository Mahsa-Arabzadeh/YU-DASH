import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../../components/list/list.component';
import { WidgetContainerComponent } from '../../components/shared/widgetContainer/widget.component';

@Component({
  selector: 'app-analitycs',
  imports: [RouterOutlet, ListComponent, WidgetContainerComponent],
  templateUrl: './analitycs.component.html',
  styleUrl: './analitycs.component.css',
})
export class AnalitycsComponent {}
