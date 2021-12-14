import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDropdownMenuComponentModule } from '../components/user-dropdown-menu/user-dropdown-menu-component.module';
import { ReposModule } from '../repos/repos.module';
import { IconsModule } from '../components/icons/icons.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserDropdownMenuComponentModule,
    IconsModule,
    ReposModule,
  ],
})
export class HomeModule {}
