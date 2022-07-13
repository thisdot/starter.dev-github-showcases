import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileExplorerRootComponent } from './file-explorer-root/file-explorer-root.component';

const routes: Routes = [
  {
    path: '',
    component: FileExplorerRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileViewerRoutingModule {}
