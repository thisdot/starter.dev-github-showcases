import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  hasActiveSortAndFilters,
  selectFilterByLanguage,
  selectFilterBySearch,
  selectFilterByType,
  selectProfileState,
  selectRepos,
  selectReposCount,
  selectSortFilter,
} from 'src/app/state/profile/profile.selectors';
import { OrderField, TypeFilter } from 'src/app/state/profile/profile.state';
import { FilterDropdownComponent } from '../filter-dropdown/filter-dropdown.component';
import { RepoControlsComponent } from './repo-controls.component';
import { ClickAwayDirective } from '../../directives/click-away.directive';

const MOCK_VALUE_SELECT_FILTER_BY_SEARCH = 'Test Search';
const MOCK_VALUE_SELECT_FILTER_BY_TYPE = TypeFilter.Forked;
const MOCK_VALUE_SELECT_FILTER_BY_LANGUAGE = 'typescript';
const MOCK_VALUE_SELECT_SORT = OrderField.Name;
const MOCK_VALUE_SELECT_REPOS_COUNT = 2;
const MOCK_VALUE_SELECT_HAS_ACTIVE_FILTERS = false;

describe('RepoControlsComponent', () => {
  let component: RepoControlsComponent;
  let fixture: ComponentFixture<RepoControlsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RepoControlsComponent,
        FilterDropdownComponent,
        ClickAwayDirective,
      ],
      imports: [ReactiveFormsModule],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectFilterBySearch,
              value: MOCK_VALUE_SELECT_FILTER_BY_SEARCH,
            },
            {
              selector: selectFilterByType,
              value: MOCK_VALUE_SELECT_FILTER_BY_TYPE,
            },
            {
              selector: selectFilterByLanguage,
              value: MOCK_VALUE_SELECT_FILTER_BY_LANGUAGE,
            },
            {
              selector: selectSortFilter,
              value: MOCK_VALUE_SELECT_SORT,
            },
            {
              selector: selectReposCount,
              value: MOCK_VALUE_SELECT_REPOS_COUNT,
            },
            {
              selector: hasActiveSortAndFilters,
              value: MOCK_VALUE_SELECT_HAS_ACTIVE_FILTERS,
            },
            {
              selector: selectProfileState,
              value: { repos: [] },
            },
            {
              selector: selectRepos,
              value: [],
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

  it('should get the repo count from the selector', (done) => {
    store.select(selectReposCount).subscribe((search) => {
      expect(search).toEqual(2);
      done();
    });
  });

  it('should not show the label if has no active filters', waitForAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    component.hasActiveSortAndFilters$.subscribe((hasActiveFilters) => {
      fixture.detectChanges();
      const resultsContainer = fixture.debugElement.query(By.css('.results'));
      expect(hasActiveFilters).toBe(false);
      expect(resultsContainer).toBeNull();
    });
  }));

  it('should get filter by type from selector', (done) => {
    store.select(selectFilterByType).subscribe((search) => {
      expect(search).toEqual(TypeFilter.Forked);
      done();
    });
  });

  it('should get filter by language from selector', (done) => {
    store.select(selectFilterByLanguage).subscribe((language) => {
      expect(language).toEqual('typescript');
      done();
    });
  });

  it('should get sort item from selector', (done) => {
    store.select(selectSortFilter).subscribe((search) => {
      expect(search).toEqual(OrderField.Name);
      done();
    });
  });
});
