import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposFilterDropdownComponent } from './repos-filter-dropdown.component';

describe('FilterDropdownComponent', () => {
  let component: ReposFilterDropdownComponent;
  let fixture: ComponentFixture<ReposFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposFilterDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
