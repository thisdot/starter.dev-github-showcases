import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronDropdownIconComponent } from './chevron-dropdown-icon.component';
import { CodeIconComponent } from './code-icon.component';
import { EyeIconComponent } from './eye-icon.component';
import { GitBranchIconComponent } from './git-branch-icon.component';
import { GitRepoIconComponent } from './git-repo-icon.component';
import { GithubLogoComponent } from './github-logo.component';
import { InformationCircleIconComponent } from './information-circle-icon.component';
import { LockClosedIconComponent } from './lock-closed-icon.component';
import { PullRequestIconComponent } from './pull-request-icon.component';
import { StarIconComponent } from './star-icon.component';

const icons: any[] = [
  ChevronDropdownIconComponent,
  CodeIconComponent,
  EyeIconComponent,
  GitBranchIconComponent,
  GitRepoIconComponent,
  GithubLogoComponent,
  InformationCircleIconComponent,
  LockClosedIconComponent,
  PullRequestIconComponent,
  StarIconComponent,
];

@NgModule({
  declarations: [...icons],
  imports: [CommonModule],
  exports: [...icons],
})
export class IconsModule {}
