import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposModule } from '../repos/repos.module';
import { UserDropdownMenuComponent } from './user-dropdown-menu/user-dropdown-menu.component';
import { IconsModule } from '@shared';
import { ToasterModule } from '../components/toaster/toaster.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, UserDropdownMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule,
    ReposModule,
    ToasterModule,
  ],
})
export class HomeModule {}
