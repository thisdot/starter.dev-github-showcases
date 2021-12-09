import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ReposComponent } from './repos.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { LoadingModule } from '../components/loading/loading.module';

@NgModule({
  declarations: [
    ReposComponent,
    WelcomeUserComponent,
    RepoListComponent,
    RepoDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, LoadingModule],
})
export class ReposModule {}
