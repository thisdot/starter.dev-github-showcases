import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { FileExplorerBlobComponent } from './file-explorer-blob/file-explorer-blob.component';
import { FileExplorerRootComponent } from './file-explorer-root.component';
import { FileExplorerViewComponent } from './file-explorer-view/file-explorer-view.component';

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
    path: 'tree/:branch',
    children: [
      {
        matcher: pathMatcher,
        component: FileExplorerViewComponent,
      },
    ],
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
export class FileExplorerRoutingModule {}
