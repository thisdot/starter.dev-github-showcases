import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  hasActiveSortAndFilters,
  selectFilterBySearch,
  selectReposCount,
} from 'src/app/state/profile/profile.selectors';
import { RepoControlsComponent } from './repo-controls.component';

const MOCK_VALUE_SELECT_FILTER_BY_SEARCH = 'Test Search';
const MOCK_VALUE_SELECT_REPOS_COUNT = 2;
const MOCK_VALUE_SELECT_HAS_ACTIVE_FILTERS = false;

describe('RepoControlsComponent', () => {
  let component: RepoControlsComponent;
  let fixture: ComponentFixture<RepoControlsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoControlsComponent],
      imports: [ReactiveFormsModule],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectFilterBySearch,
              value: MOCK_VALUE_SELECT_FILTER_BY_SEARCH,
            },
            {
              selector: selectReposCount,
              value: MOCK_VALUE_SELECT_REPOS_COUNT,
            },
            {
              selector: hasActiveSortAndFilters,
              value: MOCK_VALUE_SELECT_HAS_ACTIVE_FILTERS,
            },
          ],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoControlsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    store?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get filter by search from selector', (done) => {
    store.select(selectFilterBySearch).subscribe((search) => {
      expect(search).toEqual('Test Search');
      done();
    });
  });

  it('should get the repos count from selector', (done) => {
    store.select(selectReposCount).subscribe((search) => {
      expect(search).toEqual(2);
      done();
    });
  });

  it(
    'should not show the label if has not active filters',
    waitForAsync(() => {
      component.ngOnInit();
      fixture.detectChanges();
      component.hasActiveSortAndFilters$.subscribe((hasActiveFilters) => {
        fixture.detectChanges();
        const resultsContainer = fixture.debugElement.query(By.css('.results'));
        expect(hasActiveFilters).toBe(false);
        expect(resultsContainer).toBeNull();
      });
    }),
  );
});
