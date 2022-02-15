import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OcticonsDirective } from '../shared/directives/octicons.directive';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, OcticonsDirective],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
