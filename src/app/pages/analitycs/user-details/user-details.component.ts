import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetContainerComponent } from '../../../components/shared/widgetContainer/widget.component';

@Component({
  selector: 'app-user-details',
  imports: [WidgetContainerComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userId: number = 0;
  userName: string | null = '';
  // userProfile: string | null = '';
  userEmail: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      this.userName = params['name'];
      this.userEmail = params['email'];
    });
  }
}
