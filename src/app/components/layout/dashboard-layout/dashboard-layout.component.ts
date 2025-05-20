import { Component } from '@angular/core';
import { HeaderComponent } from '../../ui/header/header.component';
import { SideNavComponent } from '../../ui/side-nav/side-nav.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [HeaderComponent, SideNavComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {}
