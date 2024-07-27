import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from '../../../core/models/menu.interface';
import { TooltipDirective } from '../../../shared/directives/tooltip.directive';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, TooltipDirective],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
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
