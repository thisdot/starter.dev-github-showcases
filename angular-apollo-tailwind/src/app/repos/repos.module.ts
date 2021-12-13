import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ReposComponent } from './repos.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { LoadingModule } from '../components/loading/loading.module';
import { RepoHeaderComponent } from './repo-header/repo-header.component';
import { RepoActionButtonsComponent } from './repo-header/repo-action-buttons/repo-action-buttons.component';
import { RepoHeadingComponent } from './repo-header/repo-heading/repo-heading.component';
import { RepoTabNavigationComponent } from './repo-header/repo-tab-navigation/repo-tab-navigation.component';
import { PrivacyIconComponentModule } from '../components/privacy/privacy-icon.module';
import { CountButtonGroupComponentModule } from '../components/count-button-group/count-button-group.module';
import { IconsModule } from '../components/icons/icons.module';
import { FileViewerModule } from '../file-viewer/file-viewer.module';
import { RepoAboutComponent } from './components/repo-about/repo-about.component';
import { DescriptionComponent } from './components/repo-about/description/description.component';

@NgModule({
	declarations: [
		ReposComponent,
		WelcomeUserComponent,
		RepoListComponent,
		RepoDetailsComponent,
		RepoHeaderComponent,
		RepoActionButtonsComponent,
		RepoHeadingComponent,
		RepoTabNavigationComponent,
		RepoAboutComponent,
		DescriptionComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		IconsModule,
		LoadingModule,
		PrivacyIconComponentModule,
		CountButtonGroupComponentModule,
		FileViewerModule,
	],
})
export class ReposModule {}
