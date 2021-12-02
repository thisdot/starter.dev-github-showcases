import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListViewComponent } from './repo-list-view.component';

describe('RepoListViewComponent', () => {
  let component: RepoListViewComponent;
  let fixture: ComponentFixture<RepoListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
