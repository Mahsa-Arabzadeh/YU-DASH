import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list',
  imports: [MatListModule, MatIconButton, RouterModule, MatIcon, TableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
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
