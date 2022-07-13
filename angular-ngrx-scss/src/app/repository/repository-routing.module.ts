import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { TopRepositoriesComponent } from './components/top-repositories/top-repositories.component';

const routes: Routes = [
  {
    path: '',
    component: TopRepositoriesComponent,
  },
  {
    path: ':owner/:repo',
    component: RepositoryDetailsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../file-viewer/file-viewer.module').then(
            (m) => m.FileViewerModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoryRoutingModule {}
