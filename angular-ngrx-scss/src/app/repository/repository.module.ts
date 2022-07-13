import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { TopRepositoriesComponent } from './components/top-repositories/top-repositories.component';
import { UserGistsComponent } from '../home/user-gists/user-gists.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RepositoryDetailsComponent,
    UserGistsComponent,
    TopRepositoriesComponent,
  ],
  imports: [CommonModule, RepositoryRoutingModule, SharedModule],
})
export class RepositoryModule {}
