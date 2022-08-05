import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { TopRepositoriesComponent } from './components/top-repositories/top-repositories.component';
import { RepositoryHeaderComponent } from './components/repo-header/repo-header.component';
import { RepositoryNavigationComponent } from './components/repo-header/repo-navigation/repo-navigation.component';
import { RepositoryHeadingComponent } from './components/repo-header/repo-heading/repo-heading.component';
import { RepositoryInfoComponent } from './components/repo-header/repo-info/repo-info.component';
import { UserGistsComponent } from '../home/user-gists/user-gists.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RepositoryDetailsComponent,
    UserGistsComponent,
    TopRepositoriesComponent,
    RepositoryHeaderComponent,
    RepositoryNavigationComponent,
    RepositoryHeadingComponent,
    RepositoryInfoComponent,
  ],
  imports: [CommonModule, RepositoryRoutingModule, SharedModule],
})
export class RepositoryModule {}
