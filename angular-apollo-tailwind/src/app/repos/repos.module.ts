import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoRoutingModule } from './repo-routing.module';
import { ReposComponent } from './repos.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoHeaderComponent } from './repo-header/repo-header.component';
import { RepoActionButtonsComponent } from './repo-header/repo-action-buttons/repo-action-buttons.component';
import { RepoHeadingComponent } from './repo-header/repo-heading/repo-heading.component';
import { RepoTabNavigationComponent } from './repo-header/repo-tab-navigation/repo-tab-navigation.component';
import { UserGistsComponent } from './components/user-gists/user-gists.component';
import { RepoMetaComponent } from './components/repo-meta/repo-meta.component';
import {
  IconsModule,
  ContentLoadingModule,
  CountButtonGroupComponentModule,
} from '@shared';
import { ContainerComponentModule } from '@shared';

@NgModule({
  declarations: [
    ReposComponent,
    RepoListComponent,
    RepoDetailsComponent,
    RepoHeaderComponent,
    RepoActionButtonsComponent,
    RepoHeadingComponent,
    RepoTabNavigationComponent,
    UserGistsComponent,
    RepoMetaComponent,
  ],
  imports: [
    CommonModule,
    RepoRoutingModule,
    IconsModule,
    ContentLoadingModule,
    CountButtonGroupComponentModule,
    ContainerComponentModule,
  ],
})
export class ReposModule {}
