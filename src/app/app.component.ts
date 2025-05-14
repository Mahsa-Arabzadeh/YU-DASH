import { Component, computed, effect, signal } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    MatSidenavModule,
    CommonModule,
    CustomSidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Yu-dash';
  collapsed = signal(false);
  darkMode = signal(false);

  constructor(private router: Router) {}

  isLogin(): boolean {
    if (this.router.url === '/login') {
      return true;
    } else {
      return false;
    }
  }

  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  });

  sidenavComputed = computed(() => (this.collapsed() ? '65px' : '250px'));
}
