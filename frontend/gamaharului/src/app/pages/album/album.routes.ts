import { Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
  },
  {
    path: ':slug',
    component: AlbumDetailsComponent,
  },
];
