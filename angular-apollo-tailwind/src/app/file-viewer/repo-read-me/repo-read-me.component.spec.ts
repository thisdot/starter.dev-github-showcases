import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoReadMeComponent } from './repo-read-me.component';

describe('RepoReadMeComponent', () => {
  let component: RepoReadMeComponent;
  let fixture: ComponentFixture<RepoReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoReadMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
