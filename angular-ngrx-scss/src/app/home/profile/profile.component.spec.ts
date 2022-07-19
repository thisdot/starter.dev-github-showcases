import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RepoControlsComponent } from 'src/app/shared/components/repo-controls/repo-controls.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { RepoListComponent } from '../../shared/components/repo-list/repo-list.component';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
      declarations: [
        ProfileComponent,
        NavBarComponent,
        ProfileNavComponent,
        ProfileAboutComponent,
        RepoListComponent,
        RepoControlsComponent,
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
