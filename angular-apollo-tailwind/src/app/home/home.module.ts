import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubLogoComponentModule } from '../components/github-logo/github-logo-component.module';
import { UserDropdownMenuComponentModule } from '../components/user-dropdown-menu/user-dropdown-menu-component.module';
import { ReposModule } from '../repos/repos.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GithubLogoComponentModule,
    UserDropdownMenuComponentModule,
    ReposModule,
  ],
})
export class HomeModule {}
