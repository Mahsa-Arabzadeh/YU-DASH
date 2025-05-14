import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  imports: [MatListModule, RouterModule],
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
}
