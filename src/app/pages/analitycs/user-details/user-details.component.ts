import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-details',
  imports: [TableModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userId: number = 0;
  userName: string | null = '';
  userEmail: string | null = '';
  users: {
    name: string;
    email: string;
    id: number;
  }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      this.userName = params['name'];
      this.userEmail = params['email'];
    });

    if (this.userName && this.userEmail) {
      this.users.push({
        name: this.userName,
        email: this.userEmail,
        id: this.userId,
      });
    }
  }
}
