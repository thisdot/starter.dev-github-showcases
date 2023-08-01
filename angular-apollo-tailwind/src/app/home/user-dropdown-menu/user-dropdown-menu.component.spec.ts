import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownMenuComponent } from './user-dropdown-menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserDropdownViewComponent', () => {
  let component: UserDropdownMenuComponent;
  let fixture: ComponentFixture<UserDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserDropdownMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownMenuComponent);
    component = fixture.componentInstance;
    component.user = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
