import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewerRoutingModule } from './file-viewer-routing.module';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { FileExplorerRootComponent } from './file-explorer-root/file-explorer-root.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FileExplorerAboutComponent, FileExplorerRootComponent],
  imports: [CommonModule, FileViewerRoutingModule, SharedModule],
})
export class FileViewerModule {}
