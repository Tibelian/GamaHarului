import { Routes } from '@angular/router';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PlaylistListComponent,
  },
  {
    path: ':slug',
    component: PlaylistDetailsComponent,
  },
];
