import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestFiltersComponent } from './pull-requests-filters.component';

describe('PullRequestsFiltersComponent', () => {
  let component: PullRequestFiltersComponent;
  let fixture: ComponentFixture<PullRequestFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
