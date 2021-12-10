import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileViewerNavComponent } from './file-viewer-nav/file-viewer-nav.component';
import { RouterModule } from '@angular/router';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { LoadingModule } from '../components/loading/loading.module';

@NgModule({
  declarations: [FileViewerNavComponent, FileExplorerComponent],
  imports: [CommonModule, RouterModule, LoadingModule],
  exports: [FileViewerNavComponent, FileExplorerComponent],
})
export class FileViewerModule {}
