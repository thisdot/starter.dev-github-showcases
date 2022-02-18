import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReposComponent } from './profile-repos.component';

describe('ProfileReposComponent', () => {
  let component: ProfileReposComponent;
  let fixture: ComponentFixture<ProfileReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
