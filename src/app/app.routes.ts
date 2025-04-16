import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'analytics',
    component: AnalitycsComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
];
