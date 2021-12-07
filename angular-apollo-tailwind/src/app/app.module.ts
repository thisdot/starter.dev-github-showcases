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
import { RepoHeaderComponent } from './repo-header/repo-header.component';
import { RepoHeadingComponent } from './repo-heading/repo-heading.component';
import { RepoTabNavigationComponent } from './repo-tab-navigation/repo-tab-navigation.component';
import { PrivacyBadgeComponent } from './privacy/privacy-badge.component';
import { PrivacyIconComponent } from './privacy/privacy-icon.component';
import { LockClosedIconComponent } from './icons/lock-closed-icon.component';
import { GitRepoIconComponent } from './icons/git-repo-icon.component';
import { RepoActionButtonsComponent } from './repo-action-buttons/repo-action-buttons.component';
import { CountButtonGroupComponent } from './count-button-group/count-button-group.component';
import { EyeIconComponent } from './icons/eye-icon.component';
import { GitBranchIconComponent } from './icons/git-branch-icon.component';
import { StarIconComponent } from './icons/star-icon.component';
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
    RepoHeaderComponent,
    RepoHeadingComponent,
    RepoTabNavigationComponent,
    PrivacyBadgeComponent,
    PrivacyIconComponent,
    LockClosedIconComponent,
    GitRepoIconComponent,
    RepoActionButtonsComponent,
    CountButtonGroupComponent,
    EyeIconComponent,
    GitBranchIconComponent,
    StarIconComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
