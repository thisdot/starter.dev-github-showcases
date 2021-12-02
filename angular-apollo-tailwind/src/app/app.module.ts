import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubLogoComponent } from './github-logo/github-logo.component';
import { UserDropdownMenuComponent } from './user-dropdown-menu/user-dropdown-menu.component';
import { ChevronDropdownIconComponent } from './chevron-dropdown-icon/chevron-dropdown-icon.component';
import { HomeComponent } from './home/home.component';
import { RepoDetailsViewComponent } from './repo-details-view/repo-details-view.component';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeUserComponent,
    NavbarComponent,
    GithubLogoComponent,
    UserDropdownMenuComponent,
    ChevronDropdownIconComponent,
    RepoListComponent,
    HomeComponent,
    RepoDetailsViewComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
