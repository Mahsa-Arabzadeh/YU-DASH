import { Component, computed, Input, input, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { navData } from '../../data/navData';

import { MenuItemType } from '../../models/menu-list.type';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    MenuItemComponent,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  menuItems = input<MenuItemType[]>(navData);
  slideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.slideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => (this.slideNavCollapsed() ? '32' : '100'));
}
