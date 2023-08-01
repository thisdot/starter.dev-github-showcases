import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoHeaderComponent } from './repo-header.component';

describe('RepoHeaderComponent', () => {
  let component: RepoHeaderComponent;
  let fixture: ComponentFixture<RepoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
