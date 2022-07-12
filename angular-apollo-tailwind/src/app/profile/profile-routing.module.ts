import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileReposViewComponent } from './profile-repos-view';
import { ProfileComponent } from './profile.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileReposViewComponent,
      },
      {
        path: 'repositories',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
