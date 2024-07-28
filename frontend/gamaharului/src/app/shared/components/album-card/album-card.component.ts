import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, UrlTree } from '@angular/router';
import { Album } from '../../../core/models/entities/album.model';
import { LoggerService } from '../../../core/services/logger.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  /** */
  @Input({ required: true }) data!: Album;

  /** */
  private logger = inject(LoggerService);

  /** */
  private router = inject(Router);

  /** */
  get albumLink(): UrlTree {
    return this.router.createUrlTree(['/weblayer/album', this.data.slug]);
  }

  /** */
  onCardClicked(): void {
    this.logger.info(this, 'album card clicked!');
  }
}
