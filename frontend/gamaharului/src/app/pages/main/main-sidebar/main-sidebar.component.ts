import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../../../core/models/menu.interface';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss',
})
export class MainSidebarComponent implements OnInit {
  /** */
  private session = inject(SessionService);

  /** */
  private translate = inject(TranslateService);

  /** */
  public buttons: MenuItem[] = [];

  /**s */
  ngOnInit(): void {
    this.buttons = [
      {
        text: this.translate.instant('MainMenu.HomePage'),
        icon: 'home',
        link: '/',
      },
      {
        text: this.translate.instant('MainMenu.ExplorePage'),
        icon: 'search',
        link: '/explore',
      },
    ];
    if (this.session.authenticatedUser) {
      this.buttons.push({
        text: this.translate.instant('MainMenu.FavouritePage'),
        icon: 'heart',
        link: `/user/${this.session.authenticatedUser!.username}/favourites`,
      });
    }
  }
}
