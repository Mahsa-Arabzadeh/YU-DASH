import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../../components/list/list.component';
import { WidgetContainerComponent } from '../../components/shared/widgetContainer/widget.component';
import { SignUpComponent } from '../../components/login/sign-up/sign-up.component';

@Component({
  selector: 'app-analitycs',
  imports: [
    RouterOutlet,
    ListComponent,
    WidgetContainerComponent,
    SignUpComponent,
  ],
  templateUrl: './analitycs.component.html',
  styleUrl: './analitycs.component.css',
})
export class AnalitycsComponent {}
