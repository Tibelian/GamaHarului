import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Album } from '../../../core/models/entities/album.model';
import { Artist } from '../../../core/models/entities/artist.model';
import { Track } from '../../../core/models/entities/track.model';
import { AlbumCardComponent } from '../../../shared/components/album-card/album-card.component';
import { ArtistCardComponent } from '../../../shared/components/artist-card/artist-card.component';
import { TrackCardComponent } from '../../../shared/components/track-card/track-card.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ArtistCardComponent,
    TrackCardComponent,
    AlbumCardComponent,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  /** */
  trendingSongs: Track[] = [
    {
      id: 1,
      slug: 'track-1',
      title: 'Track 1 title',
      thumbnail:
        'https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg',
      artist: {
        id: 1,
        slug: 'artist-1',
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      id: 2,
      slug: 'track-2',
      thumbnail:
        'https://cdn.pixabay.com/photo/2023/10/26/04/52/old-8341706_1280.jpg',
      artist: {
        id: 2,
        slug: 'artist-2',
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      id: 3,
      slug: 'track-3',
      thumbnail:
        'https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg',
      artist: {
        id: 3,
        slug: 'artist-3',
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      id: 4,
      slug: 'track-4',
      thumbnail:
        'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg',
      artist: {
        id: 4,
        slug: 'artist-4',
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      id: 5,
      slug: 'track-5',
      artist: {
        id: 5,
        slug: 'artist-5',
        name: 'Artist name',
      },
    },
  ];

  /** */
  suggestedArtists: Artist[] = [
    {
      name: 'Artist name',
      id: 1,
      slug: 'artist-1',
      thumbnail:
        'https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg',
    },
    {
      name: 'Artist name',
      id: 2,
      slug: 'artist-2',
      thumbnail:
        'https://cdn.pixabay.com/photo/2022/09/02/20/03/man-7428290_640.jpg',
    },
    {
      name: 'Artist name',
      id: 3,
      slug: 'artist-3',
      thumbnail:
        'https://cdn.pixabay.com/photo/2019/08/14/15/25/woman-4406012_640.jpg',
    },
    {
      name: 'Artist name',
      id: 4,
      slug: 'artist-4',
      thumbnail:
        'https://cdn.pixabay.com/photo/2023/04/07/09/19/woman-7905926_640.jpg',
    },
    {
      name: 'Artist name',
      id: 5,
      slug: 'artist-5',
      thumbnail:
        'https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_640.jpg',
    },
  ];

  /** */
  latestReleases: any[] = [
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
    {
      title: 'Track title',
      artist: {
        name: 'Artist name',
      },
    },
  ];

  /** */
  newAlbums: Album[] = [
    {
      id: 1,
      slug: 'alum-1',
      title: 'Album 1 title',
      thumbnail:
        'https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg',
      artist: {
        id: 1,
        slug: 'artist-1',
        name: 'Artist name',
      },
    },
  ];
}
