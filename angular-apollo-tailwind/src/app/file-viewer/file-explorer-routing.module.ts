import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';
import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileExplorerViewComponent } from './file-explorer-view/file-explorer-view.component';

const routes: Routes = [
  {
    path: '',
    component: FileExplorerRootComponent,
  },
  {
    path: 'tree/main',
    children: [
      {
        matcher: (url) => {
          const path = url.map((segment) => segment.path).join('/');
          if (url.length && new RegExp(/^[.\w-]+(\/[.\w-]+)*$/gm).test(path)) {
            return {
              consumed: url,
              posParams: {
                path: new UrlSegment(path, {}),
              },
            };
          }

          return null;
        },
        component: FileExplorerViewComponent,
      },
    ],
  },
  {
    path: 'blob/main',
    children: [
      {
        matcher: (url) => {
          const path = url.map((segment) => segment.path).join('/');
          if (url.length && new RegExp(/^[.\w-]+(\/[.\w-]+)*$/gm).test(path)) {
            return {
              consumed: url,
              posParams: {
                path: new UrlSegment(path, {}),
              },
            };
          }

          return null;
        },
        component: FileExplorerBlobComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileExplorerRoutingModule {}
