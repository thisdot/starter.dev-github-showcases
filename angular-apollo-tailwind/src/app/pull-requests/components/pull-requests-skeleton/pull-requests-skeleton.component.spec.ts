import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsSkeletonComponent } from './pull-requests-skeleton.component';

describe('PullRequestsSkeletonComponent', () => {
  let component: PullRequestsSkeletonComponent;
  let fixture: ComponentFixture<PullRequestsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestsSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
