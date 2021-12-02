import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubLogoComponent } from './github-logo/github-logo.component';
import { UserDropdownViewComponent } from './user-dropdown-view/user-dropdown-view.component';
import { ChevronDropdownIconComponent } from './chevron-dropdown-icon/chevron-dropdown-icon.component';
import { RepoListViewComponent } from './repo-list-view/repo-list-view.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeUserComponent,
    NavbarComponent,
    GithubLogoComponent,
    UserDropdownViewComponent,
    ChevronDropdownIconComponent,
    RepoListViewComponent,
    HomeComponent,
    RepoComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
