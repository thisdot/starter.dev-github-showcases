import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileReposListComponent } from './profile-repos-list/profile-repos-list.component';
import { IconsModule } from '@shared';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileReposListComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, IconsModule],
  exports: [ProfileComponent, ProfileNavComponent, ProfileReposListComponent],
})
export class ProfileModule {}
