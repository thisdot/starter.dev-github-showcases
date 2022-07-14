import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileAboutComponent } from './profile/profile-about/profile-about.component';
import { RepoListComponent } from '../shared/components/repo-list/repo-list.component';
import { SharedModule } from '../shared/shared.module';
import { RepoControlsComponent } from '../shared/components/repo-controls/repo-controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { OrgProfileComponent } from './profile/org-profile/org-profile.component';
import { OrganizationInfoComponent } from './profile/org-profile/org-info/org-info.component';
import { RepoFilterDropdownComponent } from '../shared/components/repo-controls/repo-filter-dropdown/repo-filter-dropdown.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    ProfileNavComponent,
    ProfileAboutComponent,
    RepoListComponent,
    RepoControlsComponent,
    UserProfileComponent,
    OrgProfileComponent,
    OrganizationInfoComponent,
    RepoFilterDropdownComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
