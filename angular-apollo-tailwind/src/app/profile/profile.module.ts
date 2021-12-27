import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { DataContainerComponentModule, IconsModule } from '@shared';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileLoadingComponent } from './components/profile-loading/profile-loading.component';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { OrgsListComponent } from './components/orgs-list/orgs-list.component';
import { ProfileReposListComponent } from './profile-repos-list/profile-repos-list.component';
import { ProfileReposLoadingComponent } from './components/profile-repos-loading/profile-repos-loading.component';
import { ReposModule } from '../repos/repos.module';
import { ReposFiltersComponent } from './components/repos-filters/repos-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposFilterDropdownModule } from '../components/repos-filter-dropdown/repos-filter-dropdown.module';
import { OrgProfileComponent } from './org-profile/org-profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileAboutComponent,
    ProfileLoadingComponent,
    OrgsListComponent,
    ProfileReposListComponent,
    ProfileReposLoadingComponent,
    ReposFiltersComponent,
    OrgProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IconsModule,
    ContentLoaderModule,
    DataContainerComponentModule,
    ReposModule,
    FormsModule,
    ReactiveFormsModule,
    ReposFilterDropdownModule,
  ],
})
export class ProfileModule {}
