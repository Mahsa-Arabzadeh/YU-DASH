import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navData } from '../../../assets/data/navData';

import { MenuItemType } from '../../models/menu-list.type.model';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { HandleStateService } from '../../services/handle-state.service';

@Component({
  selector: 'app-custom-sidenav',
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
  collapsed = false;

  constructor(private handleStateService: HandleStateService) {
    handleStateService.collapseValue.subscribe((value) => {
      this.collapsed = value;
    });
  }
}
