import { Component, effect, Input, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HandleStateService } from '../../../services/handle-state.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = false;
  darkMode = signal(false);

  constructor(private handleStateService: HandleStateService) {}

  toggleMenu() {
    this.handleStateService.toggleMenu();
  }

  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  });
}
