import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentIconComponent } from './document-icon.component';
import { FolderIconComponent } from './folder-icon.component';
import { CodeIconComponent } from './code-icon.component';
import { EyeIconComponent } from './eye-icon.component';
import { GitBranchIconComponent } from './git-branch-icon.component';
import { GitRepoIconComponent } from './git-repo-icon.component';
import { GithubLogoComponent } from './github-logo.component';
import { InformationCircleIconComponent } from './information-circle-icon.component';
import { PullRequestIconComponent } from './pull-request-icon.component';
import { PrivacyIconComponent } from './privacy-icon.component';
import { PrivacyBadgeComponent } from './privacy-badge.component';
import { TwitterIconComponent } from './twitter-icon.component';
import { TOCIconComponent } from './toc.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroChevronDown,
  heroCodeBracket,
  heroInformationCircle,
  heroLockClosed,
  heroStar,
  heroFolder,
  heroDocument,
  heroBookOpen,
  heroXMark,
  heroMinusCircle,
  heroCheck,
  heroCheckCircle,
  heroChatBubbleLeftEllipsis,
  heroChevronLeft,
  heroChevronRight,
  heroUsers,
  heroBuildingOffice,
  heroMapPin,
  heroLink,
} from '@ng-icons/heroicons/outline';

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
  PrivacyIconComponent,
  PrivacyBadgeComponent,
  TwitterIconComponent,
  TOCIconComponent,
];

@NgModule({
  declarations: [...icons],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroChevronDown,
      heroCodeBracket,
      heroInformationCircle,
      heroLockClosed,
      heroStar,
      heroFolder,
      heroDocument,
      heroBookOpen,
      heroXMark,
      heroMinusCircle,
      heroCheck,
      heroCheckCircle,
      heroChatBubbleLeftEllipsis,
      heroChevronLeft,
      heroChevronRight,
      heroUsers,
      heroBuildingOffice,
      heroMapPin,
      heroLink,
    }),
  ],
  exports: [...icons, NgIconsModule],
})
export class IconsModule {}
