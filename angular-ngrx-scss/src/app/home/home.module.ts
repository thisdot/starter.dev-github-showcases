import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
