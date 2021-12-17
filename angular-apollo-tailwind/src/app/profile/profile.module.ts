import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';

@NgModule({
  declarations: [ProfileComponent, ProfileNavComponent],
  imports: [CommonModule, RouterModule],
})
export class ProfileModule {}
