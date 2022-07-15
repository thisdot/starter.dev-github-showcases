import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { FileExplorerRootComponent } from './file-explorer-root/file-explorer-root.component';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';

const pathMatcher = (url: UrlSegment[]) => {
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
};

const routes: Routes = [
  {
    path: '',
    component: FileExplorerRootComponent,
  },
  {
    path: 'blob/:branch',
    children: [
      {
        matcher: pathMatcher,
        component: FileExplorerBlobComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileViewerRoutingModule {}
