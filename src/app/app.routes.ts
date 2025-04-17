import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalitycsComponent } from './pages/analitycs/analitycs.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PlayCircleComponent } from './pages/content/play-circle/play-circle.component';
import { PostAddComponent } from './pages/content/post-add/post-add.component';
import { PlaylistPlayComponent } from './pages/content/playlist-play/playlist-play.component';

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
    component: AnalitycsComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
];
