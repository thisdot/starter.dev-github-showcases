import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ReposComponent } from './repos.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailsViewComponent } from './repo-details-view/repo-details-view.component';

@NgModule({
  declarations: [
    ReposComponent,
    WelcomeUserComponent,
    RepoListComponent,
    RepoDetailsViewComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [WelcomeUserComponent, RepoListComponent, RepoDetailsViewComponent],
})
export class ReposModule {}
