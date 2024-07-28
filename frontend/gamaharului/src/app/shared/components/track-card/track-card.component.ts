import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, UrlTree } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Track } from '../../../core/models/entities/track.model';
import { LoggerService } from '../../../core/services/logger.service';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule, RouterLink, TooltipDirective],
  templateUrl: './track-card.component.html',
  styleUrl: './track-card.component.scss',
})
export class TrackCardComponent {
  /** */
  @Input({ required: true }) data!: Track;

  /** */
  private logger = inject(LoggerService);

  /** */
  private router = inject(Router);

  /** */
  get trackLink(): UrlTree {
    return this.router.createUrlTree(['/webplayer/track/', this.data.slug]);
  }

  /** */
  get artistLink(): UrlTree {
    return this.router.createUrlTree([
      '/webplayer/artist/',
      this.data.artist?.slug,
    ]);
  }

  /** */
  onCardClicked(): void {
    this.logger.info(this, 'track card clicked!');
  }
}
