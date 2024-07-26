import { Routes } from '@angular/router';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { TrackListComponent } from './track-list/track-list.component';

export const routes: Routes = [
  {
    path: '',
    component: TrackListComponent,
  },
  {
    path: ':slug',
    component: TrackDetailsComponent,
  },
];
