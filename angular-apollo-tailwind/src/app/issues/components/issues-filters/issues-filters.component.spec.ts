import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesFiltersComponent } from './issues-filters.component';

describe('IssuesFiltersComponent', () => {
  let component: IssuesFiltersComponent;
  let fixture: ComponentFixture<IssuesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
