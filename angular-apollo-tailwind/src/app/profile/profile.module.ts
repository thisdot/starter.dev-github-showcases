import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { IconsModule } from '../components/icons/icons.module';

@NgModule({
  declarations: [ProfileComponent, ProfileNavComponent],
  imports: [CommonModule, RouterModule, IconsModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
