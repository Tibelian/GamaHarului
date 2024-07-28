import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, UrlTree } from '@angular/router';
import { Artist } from '../../../core/models/entities/artist.model';
import { LoggerService } from '../../../core/services/logger.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
})
export class ArtistCardComponent {
  /** */
  @Input({ required: true }) data!: Artist;

  /** */
  private logger = inject(LoggerService);

  /** */
  private router = inject(Router);

  /** */
  get artistLink(): UrlTree {
    return this.router.createUrlTree(['/weblayer/artist', this.data.slug]);
  }

  /** */
  onCardClicked(): void {
    this.logger.info(this, 'artist card clicked!');
  }
}
