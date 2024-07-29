import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-sidebar-catalogue',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, NgbDropdownModule],
  templateUrl: './main-sidebar-catalogue.component.html',
  styleUrl: './main-sidebar-catalogue.component.scss',
})
export class MainSidebarCatalogueComponent {
  data = [
    {
      image: null,
      title: 'Track title',
      description: 'Author name',
      link: '',
    },
    {
      image: null,
      title: 'Track title',
      description: 'Author name',
      link: '',
    },
    {
      image: null,
      title: 'Track title',
      description: 'Author name',
      link: '',
    },
  ];
}
