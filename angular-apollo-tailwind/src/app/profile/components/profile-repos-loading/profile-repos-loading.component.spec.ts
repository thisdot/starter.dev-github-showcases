import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReposLoadingComponent } from './profile-repos-loading.component';

describe('ProfileReposLoadingComponent', () => {
  let component: ProfileReposLoadingComponent;
  let fixture: ComponentFixture<ProfileReposLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileReposLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReposLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
