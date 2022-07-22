import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewerRoutingModule } from './file-viewer-routing.module';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { FileExplorerRootComponent } from './file-explorer-root/file-explorer-root.component';
import { SharedModule } from '../shared/shared.module';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { PrismModule } from '@prism';
import { FileCodeComponent } from './components/file-code/file-code.component';
import { FileTextComponent } from './components/file-text/file-text.component';
import { FileExplorerNavComponent } from './file-explorer-nav/file-explorer-nav.component';

@NgModule({
  declarations: [
    FileExplorerAboutComponent,
    FileExplorerRootComponent,
    FileExplorerBlobComponent,
    FileViewerComponent,
    FileCodeComponent,
    FileTextComponent,
    FileExplorerNavComponent,
  ],
  imports: [CommonModule, FileViewerRoutingModule, SharedModule, PrismModule],
})
export class FileViewerModule {}
