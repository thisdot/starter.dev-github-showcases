import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';
import { FileExplorerNavComponent } from './file-explorer-nav/file-explorer-nav.component';
import { FileExplorerListComponent } from './file-explorer-list/file-explorer-list.component';
import { FileExplorerViewComponent } from './file-explorer-view/file-explorer-view.component';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { FileExplorerAboutDescriptionComponent } from './components/file-explorer-about/file-explorer-about-description/file-explorer-about-description.component';
import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';
import { ContentLoadingModule, IconsModule } from '@shared';

@NgModule({
  declarations: [
    FileExplorerRootComponent,
    FileExplorerViewComponent,
    FileExplorerNavComponent,
    FileExplorerListComponent,
    FileExplorerAboutComponent,
    FileExplorerAboutDescriptionComponent,
    FileViewerComponent,
    FileExplorerBlobComponent,
  ],
  imports: [
    CommonModule,
    FileExplorerRoutingModule,
    IconsModule,
    ContentLoadingModule,
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
