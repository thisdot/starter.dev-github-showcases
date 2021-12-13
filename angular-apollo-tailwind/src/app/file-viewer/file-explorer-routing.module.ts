import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileViewerComponent } from './file-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: FileViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileExplorerRoutingModule {}
