import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListItemComponent } from './repo-list-item.component';

describe('RepoListItemComponent', () => {
  let component: RepoListItemComponent;
  let fixture: ComponentFixture<RepoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
