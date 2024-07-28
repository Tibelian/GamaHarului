import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MainDashboardComponent } from './pages/main/main-dashboard/main-dashboard.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'webplayer',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainDashboardComponent,
      },
      {
        path: 'artist',
        loadChildren: () =>
          import('./pages/artist/artist.routes').then((m) => m.routes),
      },
      {
        path: 'album',
        loadChildren: () =>
          import('./pages/album/album.routes').then((m) => m.routes),
      },
      {
        path: 'track',
        loadChildren: () =>
          import('./pages/track/track.routes').then((m) => m.routes),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('./pages/playlist/playlist.routes').then((m) => m.routes),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.routes').then((m) => m.routes),
      },
    ],
  },
];
