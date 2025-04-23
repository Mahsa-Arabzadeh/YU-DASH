import { Component, inject, OnInit } from '@angular/core';
import { UserDataService } from '../../../../services/user-data.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-data',
  imports: [TableModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent implements OnInit {
  users: any[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
