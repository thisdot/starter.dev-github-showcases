import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  code,
  informationCircle,
  lockClosed,
  star,
  folder,
  document,
  bookOpen,
  chevronDown,
  HeroIconModule,
} from 'ng-heroicon';
import { DocumentIconComponent } from './document-icon.component';
import { FolderIconComponent } from './folder-icon.component';
import { CodeIconComponent } from './code-icon.component';
import { EyeIconComponent } from './eye-icon.component';
import { GitBranchIconComponent } from './git-branch-icon.component';
import { GitRepoIconComponent } from './git-repo-icon.component';
import { GithubLogoComponent } from './github-logo.component';
import { InformationCircleIconComponent } from './information-circle-icon.component';
import { PullRequestIconComponent } from './pull-request-icon.component';

const icons = [
  DocumentIconComponent,
  FolderIconComponent,
  CodeIconComponent,
  EyeIconComponent,
  GitBranchIconComponent,
  GitRepoIconComponent,
  GithubLogoComponent,
  InformationCircleIconComponent,
  PullRequestIconComponent,
];

@NgModule({
  declarations: [...icons],
  imports: [
    CommonModule,
    HeroIconModule.withIcons({
      chevronDown,
      code,
      informationCircle,
      lockClosed,
      star,
      folder,
      document,
      bookOpen,
    }),
  ],
  exports: [...icons, HeroIconModule],
})
export class IconsModule {}
