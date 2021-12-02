import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownViewComponent } from './user-dropdown-view.component';

describe('UserDropdownViewComponent', () => {
  let component: UserDropdownViewComponent;
  let fixture: ComponentFixture<UserDropdownViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDropdownViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
