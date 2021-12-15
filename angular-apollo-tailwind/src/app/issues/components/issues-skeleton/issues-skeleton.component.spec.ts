import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesSkeletonComponent } from './issues-skeleton.component';

describe('IssuesLoadingComponent', () => {
  let component: IssuesSkeletonComponent;
  let fixture: ComponentFixture<IssuesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
