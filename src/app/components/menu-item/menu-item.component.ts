import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular material components:
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// types
import { type MenuItemType } from '../../models/menu-list.type';

// Angular animation:
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],
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
