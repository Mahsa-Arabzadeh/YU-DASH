import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { HandleStateService } from './services/handle-state.service';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [AuthLayoutComponent, DashboardLayoutComponent],
})
export class AppComponent {
  title = 'Yu-dash';
  collapsed = false;

  constructor(
    private router: Router,
    private handleStateService: HandleStateService
  ) {
    handleStateService.collapseValue.subscribe((value) => {
      this.collapsed = value;
    });
  }

  isLogin(): boolean {
    return (
      this.router.url === '/auth/login' || this.router.url === '/auth/signup'
    );
  }
}
