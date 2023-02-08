import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestCardComponent } from './pull-request-card.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { RepoPullRequest } from '../../../state/repository';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';

describe('PullRequestCardComponent', () => {
  let component: PullRequestCardComponent;
  let fixture: ComponentFixture<PullRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestCardComponent],
      imports: [SharedModule],
    })
      .overrideComponent(PullRequestCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestCardComponent);
    component = fixture.componentInstance;
    component.pullRequest = {
      id: 1,
      login: 'thisdot',
      title: 'Get PRs information',
      number: 45,
      state: 'open',
      createdAt: new Date('01/01/2022'),
      labels: [
        {
          id: 2,
          node_id: '2I45d17',
          url: 'QA7hRW',
          name: 'bug',
          color: 'D4C5F9',
        },
      ],
      commentCount: 3,
    } as RepoPullRequest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pull request card in open state', () => {
    const openStateIconEl: HTMLElement = fixture.debugElement.query(
      By.css('[appOcticon="no-entry"'),
    ).nativeElement;
    const closedStateIconEl = fixture.debugElement.query(
      By.css('[appOcticon="check-circle"'),
    );
    const titleEl: HTMLElement = fixture.debugElement.query(
      By.css('.title'),
    ).nativeElement;
    const labelEl: HTMLElement = fixture.debugElement.query(
      By.css('.label'),
    ).nativeElement;
    const metaEl: HTMLElement = fixture.debugElement.query(
      By.css('.meta'),
    ).nativeElement;
    const commentCountEl: HTMLElement = fixture.debugElement.query(
      By.css('.comment-count'),
    ).nativeElement;

    expect(openStateIconEl).toBeTruthy();
    expect(closedStateIconEl).toBeFalsy();
    expect(titleEl.textContent).toContain('Get PRs information');
    expect(labelEl.textContent).toContain('bug');
    expect(metaEl.textContent).toContain('#45 opened 1 year ago by thisdot');
    expect(commentCountEl.textContent).toContain('3');
  });

  it('should pull request card in closed state', () => {
    component.pullRequest = {
      ...component.pullRequest,
      state: 'closed',
    };
    fixture.detectChanges();
    const openStateIconEl = fixture.debugElement.query(
      By.css('[appOcticon="no-entry"'),
    );
    const closedStateIconEl = fixture.debugElement.query(
      By.css('[appOcticon="check-circle"'),
    ).nativeElement;
    const metaEl: HTMLElement = fixture.debugElement.query(
      By.css('.meta'),
    ).nativeElement;

    expect(openStateIconEl).toBeFalsy();
    expect(closedStateIconEl).toBeTruthy();
    expect(metaEl.textContent).toContain(
      '#45 by thisdot was closed 1 year ago',
    );
  });
});
