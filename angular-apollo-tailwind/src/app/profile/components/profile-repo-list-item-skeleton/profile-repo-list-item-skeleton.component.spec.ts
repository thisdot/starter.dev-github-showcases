import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRepoListItemSkeletonComponent } from './profile-repo-list-item-skeleton.component';

describe('ProfileRepoListItemSkeletonComponent', () => {
  let component: ProfileRepoListItemSkeletonComponent;
  let fixture: ComponentFixture<ProfileRepoListItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileRepoListItemSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRepoListItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
