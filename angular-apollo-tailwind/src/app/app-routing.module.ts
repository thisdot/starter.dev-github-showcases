import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoDetailsViewComponent } from './repo/repo-details-view/repo-details-view.component';

const routes: Routes = [
  {
    path: ':owner/:repo',
    component: RepoDetailsViewComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
