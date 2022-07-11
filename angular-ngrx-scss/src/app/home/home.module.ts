import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OcticonsDirective } from '../shared/directives/octicons.directive';
import { ProfileComponent } from './profile/profile.component';
import { TabNavComponent } from '../shared/components/tab-nav/tab-nav.component';
import { ProfileAboutComponent } from './profile/profile-about/profile-about.component';
import { RepoListComponent } from '../shared/components/repo-list/repo-list.component';
import { RelativeTimePipe } from '../shared/pipes/relative-time.pipe';
import { RepoCardComponent } from '../shared/components/repo-card/repo-card.component';
import { UserGistsComponent } from './user-gists/user-gists.component';
import { TopRepositoriesComponent } from './top-repositories/top-repositories.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationInfoComponent } from './organization/org-info/org-info.component';

@NgModule({
  declarations: [
    NavBarComponent,
    OcticonsDirective,
    HomeComponent,
    ProfileComponent,
    TabNavComponent,
    ProfileAboutComponent,
    RepoListComponent,
    RepoCardComponent,
    RelativeTimePipe,
    UserGistsComponent,
    TopRepositoriesComponent,
    OrganizationComponent,
    OrganizationInfoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
