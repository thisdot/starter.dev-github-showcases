import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { FileViewerComponent } from './file-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: FileViewerComponent,
  },
  {
    path: 'tree/main',
    children: [
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^[\w-]+(\/[\w-]+)*$/gm)) {
            return {
              consumed: url,
              posParams: {
                path: new UrlSegment(url[0].path.substr(1), {}),
              },
            };
          }

          return null;
        },
        // TODO: add component here
      },
    ],
  },
  {
    path: 'blob/main',
    children: [
      {
        matcher: (url) => {
          if (
            url.length === 1 &&
            url[0].path.match(/^[\w-]+(\/[\w-]+)*\/[\w-.]+$/gm)
          ) {
            return {
              consumed: url,
              posParams: {
                path: new UrlSegment(url[0].path.substr(1), {}),
              },
            };
          }

          return null;
        },
        // TODO: add component here
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileExplorerRoutingModule {}
