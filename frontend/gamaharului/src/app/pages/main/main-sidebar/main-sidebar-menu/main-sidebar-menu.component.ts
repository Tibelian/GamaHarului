import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../../../../core/models/menu.interface';
import { SessionService } from '../../../../core/services/session.service';

@Component({
  selector: 'app-main-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, FontAwesomeModule],
  templateUrl: './main-sidebar-menu.component.html',
  styleUrl: './main-sidebar-menu.component.scss',
})
export class MainSidebarMenuComponent implements OnInit {
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
        link: '/webplayer',
      },
      {
        text: this.translate.instant('MainMenu.ExplorePage'),
        icon: 'search',
        link: '/webplayer/explore',
      },
    ];
    if (this.session.authenticatedUser) {
      this.buttons.push({
        text: this.translate.instant('MainMenu.FavouritePage'),
        icon: 'heart',
        link: `/webplayer/user/${this.session.authenticatedUser!.username}/favourites`,
      });
    }
  }
}
