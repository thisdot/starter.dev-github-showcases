import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHeaderSkeletonComponent } from './repo-header-skeleton.component';

describe('RepoComponent', () => {
  let component: RepoHeaderSkeletonComponent;
  let fixture: ComponentFixture<RepoHeaderSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoHeaderSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoHeaderSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
