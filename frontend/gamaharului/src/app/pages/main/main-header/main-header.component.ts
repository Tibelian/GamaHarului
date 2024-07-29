import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '../../../core/models/menu.interface';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    NgbTooltipModule,
    NgbCollapseModule,
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  /**
   * Start with the menu collapsed so that it does not
   * appear initially when the page loads on a small screen!
   */
  isMenuCollapsed = true;

  /** */
  menu: MenuItem[] = [
    {
      icon: 'palette',
      text: 'Change theme',
      link: '',
    },
    {
      icon: 'bell',
      text: 'What`s new',
      link: '',
    },
    {
      icon: 'user',
      text: 'Sign in or create an account',
      link: '',
    },
  ];
}
