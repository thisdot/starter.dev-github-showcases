import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OcticonsDirective } from '../shared/directives/octicons.directive';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileAboutComponent } from './profile/profile-about/profile-about.component';
import { ProfileReposComponent } from './profile/profile-repos/profile-repos.component';
import { RelativeTimePipe } from '../shared/pipes/relative-time.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    OcticonsDirective,
    HomeComponent,
    ProfileComponent,
    ProfileNavComponent,
    ProfileAboutComponent,
    ProfileReposComponent,
    RelativeTimePipe,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
