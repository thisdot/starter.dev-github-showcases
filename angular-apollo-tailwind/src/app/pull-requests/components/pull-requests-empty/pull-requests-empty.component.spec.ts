import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsEmptyComponent } from './pull-requests-empty.component';

describe('PullRequestsEmptyComponent', () => {
  let component: PullRequestsEmptyComponent;
  let fixture: ComponentFixture<PullRequestsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestsEmptyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
