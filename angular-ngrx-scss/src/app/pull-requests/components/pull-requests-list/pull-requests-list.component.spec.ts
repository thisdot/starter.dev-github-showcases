import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsListComponent } from './pull-requests-list.component';

describe('PullRequestsListComponent', () => {
  let component: PullRequestsListComponent;
  let fixture: ComponentFixture<PullRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
