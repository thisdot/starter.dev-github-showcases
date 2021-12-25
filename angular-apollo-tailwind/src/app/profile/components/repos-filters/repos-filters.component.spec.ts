import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposFiltersComponent } from './repos-filters.component';

describe('ReposFilterComponent', () => {
  let component: ReposFiltersComponent;
  let fixture: ComponentFixture<ReposFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
