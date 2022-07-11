import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';
import {
  FileExplorerNavComponent,
  FileExplorerNavSkeletonComponent,
} from './file-explorer-nav';
import { FileExplorerListComponent } from './file-explorer-list/file-explorer-list.component';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { FileExplorerAboutDescriptionComponent } from './components/file-explorer-about/file-explorer-about-description/file-explorer-about-description.component';
import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';
import {
  ContentLoadingModule,
  DataContainerComponentModule,
  ErrorBlockComponentModule,
  IconsModule,
  PipesModule,
} from '@shared';
import { FileCodeComponent } from './components/file-code/file-code.component';
import { PrismModule } from '@prism';
import { FileTextComponent } from '../profile/components/file-text/file-text.component';
import { HomePageUrlComponent } from './components/file-explorer-about/home-page-url/home-page-url.component';
import { TopicsComponent } from './components/file-explorer-about/topics/topics.component';
import { RepoReadMeComponent } from './repo-read-me/repo-read-me.component';
import { ReadMeComponent } from './repo-read-me/read-me/read-me.component';
import { FileExplorerListContainerComponent } from './file-explorer-list-container/file-explorer-list-container.component';
import { FileExplorerViewComponent } from './file-explorer-view/file-explorer-view.component';

@NgModule({
  declarations: [
    FileExplorerRootComponent,
    FileExplorerViewComponent,
    FileExplorerNavComponent,
    FileExplorerNavSkeletonComponent,
    FileExplorerListContainerComponent,
    FileExplorerListComponent,
    FileExplorerAboutComponent,
    FileExplorerAboutDescriptionComponent,
    FileViewerComponent,
    FileExplorerBlobComponent,
    FileCodeComponent,
    FileTextComponent,
    HomePageUrlComponent,
    TopicsComponent,
    RepoReadMeComponent,
    ReadMeComponent,
  ],
  imports: [
    CommonModule,
    FileExplorerRoutingModule,
    IconsModule,
    ContentLoadingModule,
    DataContainerComponentModule,
    ErrorBlockComponentModule,
    PrismModule,
    PipesModule,
  ],
  exports: [
    FileExplorerRootComponent,
    FileExplorerViewComponent,
    FileExplorerNavComponent,
    FileExplorerListComponent,
    FileExplorerAboutComponent,
    FileExplorerAboutDescriptionComponent,
    FileViewerComponent,
  ],
})
export class FileExplorerModule {}
