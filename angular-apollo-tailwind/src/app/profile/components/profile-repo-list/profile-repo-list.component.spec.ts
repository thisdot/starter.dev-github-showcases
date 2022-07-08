import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRepoListComponent } from './profile-repo-list.component';

describe('ProfileRepoListComponent', () => {
  let component: ProfileRepoListComponent;
  let fixture: ComponentFixture<ProfileRepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileRepoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
