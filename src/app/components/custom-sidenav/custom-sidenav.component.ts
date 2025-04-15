import { Component, input } from '@angular/core';
import { navData } from '../../data/navData';

import { MenuItemType } from '../../types/menu-list.type';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  menuItems = input<MenuItemType[]>(navData);
}
