import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { PlayCircleComponent } from './pages/content/play-circle/play-circle.component';
import { LoginComponent } from './components/login/login/login.component';
import { authGuard } from './auth/auth.guard';
import { UserDetailsComponent } from './pages/analitycs/user-details/user-details.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'package',
        component: PlayCircleComponent,
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
];
