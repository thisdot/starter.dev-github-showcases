import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileReposComponent } from './profile-repos/profile-repos.component';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        ProfileComponent,
        NavBarComponent,
        ProfileNavComponent,
        ProfileAboutComponent,
        ProfileReposComponent,
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
