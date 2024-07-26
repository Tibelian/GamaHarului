import { Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ArtistListComponent,
  },
  {
    path: ':slug',
    component: ArtistDetailsComponent,
  },
];
