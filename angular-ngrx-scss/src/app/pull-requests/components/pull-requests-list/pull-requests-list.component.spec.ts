import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsListComponent } from './pull-requests-list.component';
import { ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PullRequest } from 'src/app/repository/services/repository.interfaces';

describe('PullRequestsListComponent', () => {
  let component: PullRequestsListComponent;
  let fixture: ComponentFixture<PullRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestsListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideComponent(PullRequestsListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty list if pull requests is null', () => {
    const emptyListEl: HTMLElement = fixture.debugElement.query(
      By.css('.empty-list'),
    ).nativeElement;

    expect(emptyListEl.textContent).toContain(
      'No results matched your search.',
    );
  });

  it('should render pull request cards', () => {
    component.pullRequests = {
      total: 1,
      paginationParams: {
        page: 1,
        canNext: false,
        canPrev: false,
      },
      pullRequests: [
        {
          id: 1,
          user: { login: 'thisdot' },
          title: 'Get PRs information',
          number: 45,
          state: 'open',
          created_at: new Date('01/01/2021'),
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
        } as unknown as PullRequest,
      ],
    };
    fixture.detectChanges();
    const prCardEl = fixture.debugElement.queryAll(
      By.css('app-pull-request-card'),
    );

    expect(prCardEl.length).toBe(1);
  });
});
