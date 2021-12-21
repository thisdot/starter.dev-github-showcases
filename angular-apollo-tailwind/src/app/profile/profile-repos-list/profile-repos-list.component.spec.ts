import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReposListComponent } from './profile-repos-list.component';

describe('ProfileReposListComponent', () => {
  let component: ProfileReposListComponent;
  let fixture: ComponentFixture<ProfileReposListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileReposListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
