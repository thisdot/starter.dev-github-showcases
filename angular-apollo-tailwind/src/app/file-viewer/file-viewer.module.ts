import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';
import { FileViewerNavComponent } from './file-viewer-nav/file-viewer-nav.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { LoadingModule } from '../components/loading/loading.module';
import { IconsModule } from '../components/icons/icons.module';
import { FileViewerComponent } from './file-viewer.component';
import { FileExplorerAboutComponent } from './components/file-explorer-about/file-explorer-about.component';
import { FileExplorerAboutDescriptionComponent } from './components/file-explorer-about/file-explorer-about-description/file-explorer-about-description.component';

@NgModule({
  declarations: [
    FileViewerComponent,
    FileViewerNavComponent,
    FileExplorerComponent,
    FileExplorerAboutComponent,
    FileExplorerAboutDescriptionComponent,
  ],
  imports: [
    CommonModule,
    FileExplorerRoutingModule,
    LoadingModule,
    IconsModule,
  ],
  exports: [
    FileViewerComponent,
    FileViewerNavComponent,
    FileExplorerComponent,
    FileExplorerAboutComponent,
    FileExplorerAboutDescriptionComponent,
  ],
})
export class FileViewerModule {}
