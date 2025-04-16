import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuItemType } from '../../types/menu-list.type';

@Component({
  selector: 'app-menu-item',
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  item = input.required<MenuItemType>();
  nestedMenuOpen = signal(false);
  collapsed = input(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
