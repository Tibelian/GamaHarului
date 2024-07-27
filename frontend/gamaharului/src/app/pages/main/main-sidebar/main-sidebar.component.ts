import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainSidebarCatalogueComponent } from './main-sidebar-catalogue/main-sidebar-catalogue.component';
import { MainSidebarMenuComponent } from './main-sidebar-menu/main-sidebar-menu.component';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MainSidebarMenuComponent,
    MainSidebarCatalogueComponent,
  ],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss',
})
export class MainSidebarComponent {}
