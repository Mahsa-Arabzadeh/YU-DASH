import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PlayCircleComponent } from './pages/content/play-circle/play-circle.component';
import { PostAddComponent } from './pages/content/post-add/post-add.component';
import { PlaylistPlayComponent } from './pages/content/playlist-play/playlist-play.component';
import { LoginComponent } from './components/login/login/login.component';
import { authGuard } from './auth/auth.guard';
import { UserDetailsComponent } from './pages/analitycs/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'videos',
        component: PlayCircleComponent,
      },
      {
        path: 'playlists',
        component: PlaylistPlayComponent,
      },
      {
        path: 'posts',
        component: PostAddComponent,
      },
    ],
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./pages/analitycs/analitycs.component').then(
        (m) => m.AnalitycsComponent
      ),
  },
  {
    path: 'userDetails',
    component: UserDetailsComponent,
  },

  {
    path: 'comments',
    component: CommentsComponent,
  },
];
