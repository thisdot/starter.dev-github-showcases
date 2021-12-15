import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesEmptyComponent } from './issues-empty.component';

describe('IssuesEmptyComponent', () => {
  let component: IssuesEmptyComponent;
  let fixture: ComponentFixture<IssuesEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesEmptyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
