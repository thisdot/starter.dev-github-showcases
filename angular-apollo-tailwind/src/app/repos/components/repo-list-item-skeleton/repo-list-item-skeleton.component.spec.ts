import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListItemSkeletonComponent } from './repo-list-item-skeleton.component';

describe('PullRequestsSkeletonComponent', () => {
  let component: RepoListItemSkeletonComponent;
  let fixture: ComponentFixture<RepoListItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListItemSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
