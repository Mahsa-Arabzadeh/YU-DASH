import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list',
  imports: [MatListModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  users: any[] = [];
  constructor(private authServic: AuthService) {}

  ngOnInit(): void {
    this.authServic.getUserData().subscribe((res) => {
      this.users = res;
    });
  }

  removeUser(id: string) {
    this.authServic.removeUser(id).subscribe({
      next: () => alert('are you coure?!'),
    });
  }
}
