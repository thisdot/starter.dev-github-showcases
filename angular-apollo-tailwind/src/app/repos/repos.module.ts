import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ReposComponent } from './repos.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { LoadingModule } from '../components/loading/loading.module';
import { FileViewerModule } from '../file-viewer/file-viewer.module';
import { RepoAboutComponent } from './components/repo-about/repo-about.component';
import { DescriptionComponent } from './components/repo-about/description/description.component';

@NgModule({
  declarations: [
    ReposComponent,
    WelcomeUserComponent,
    RepoListComponent,
    RepoDetailsComponent,
    RepoAboutComponent,
    DescriptionComponent,
  ],
  imports: [CommonModule, RouterModule, LoadingModule, FileViewerModule],
})
export class ReposModule {}
