import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidebarCatalogueComponent } from './main-sidebar-catalogue.component';

describe('MainSidebarCatalogueComponent', () => {
  let component: MainSidebarCatalogueComponent;
  let fixture: ComponentFixture<MainSidebarCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSidebarCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSidebarCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
