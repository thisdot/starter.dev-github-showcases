import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ErrorBlockComponentModule, IconsModule } from '@shared';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileLoadingComponent } from './components/profile-loading/profile-loading.component';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { OrgsListComponent } from './components/orgs-list/orgs-list.component';
import { ReposModule } from '../repos/repos.module';
import { ReposFiltersComponent } from './components/repos-filters/repos-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposFilterDropdownModule } from '../components/repos-filter-dropdown/repos-filter-dropdown.module';
import { OrgProfileComponent } from './org-profile/org-profile.component';
import { OrgProfileAboutComponent } from './org-about/org-about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaginationModule } from '../components/pagination/pagination.module';
import { ProfileReposViewComponent } from './profile-repos-view';
import {
  ProfileRepoListComponent,
  ProfileRepoListItemComponent,
  ProfileRepoListItemSkeletonComponent,
} from './components';
import { PipesModule } from '@shared';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileAboutComponent,
    ProfileLoadingComponent,
    OrgsListComponent,
    ProfileReposViewComponent,
    ProfileRepoListComponent,
    ProfileRepoListItemComponent,
    ProfileRepoListItemSkeletonComponent,
    ReposFiltersComponent,
    OrgProfileComponent,
    OrgProfileAboutComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IconsModule,
    ContentLoaderModule,
    ErrorBlockComponentModule,
    ReposModule,
    FormsModule,
    ReactiveFormsModule,
    ReposFilterDropdownModule,
    PaginationModule,
    PipesModule,
  ],
})
export class ProfileModule {}
