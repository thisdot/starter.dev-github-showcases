import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { IconsModule } from '../components/icons/icons.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileReposListComponent } from './profile-repos-list/profile-repos-list.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileReposListComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, IconsModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
