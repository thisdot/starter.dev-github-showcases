import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReposViewComponent } from './profile-repos-view.component';

describe('ProfileReposViewComponent', () => {
  let component: ProfileReposViewComponent;
  let fixture: ComponentFixture<ProfileReposViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileReposViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
