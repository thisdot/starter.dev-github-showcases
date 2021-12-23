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

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileAboutComponent,
    ProfileLoadingComponent,
    OrgsListComponent,
    ProfileReposListComponent,
    ProfileReposLoadingComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IconsModule,
    ContentLoaderModule,
    DataContainerComponentModule,
    ReposModule,
  ],
})
export class ProfileModule {}
