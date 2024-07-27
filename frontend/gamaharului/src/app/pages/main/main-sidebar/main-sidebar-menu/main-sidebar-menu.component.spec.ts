import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidebarMenuComponent } from './main-sidebar-menu.component';

describe('MainSidebarMenuComponent', () => {
  let component: MainSidebarMenuComponent;
  let fixture: ComponentFixture<MainSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSidebarMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
