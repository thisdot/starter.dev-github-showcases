import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestCardComponent } from './pull-request-card.component';

describe('PullRequestCardComponent', () => {
  let component: PullRequestCardComponent;
  let fixture: ComponentFixture<PullRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
