import { Component } from '@angular/core';
import { CustomSidenavComponent } from '../../custom-sidenav/custom-sidenav.component';
import { HandleStateService } from '../../../services/handle-state.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  imports: [
    CustomSidenavComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterOutlet,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  collapsed = false;

  constructor(private handleStateService: HandleStateService) {
    handleStateService.collapseValue.subscribe((value) => {
      this.collapsed = value;
    });
  }
}
