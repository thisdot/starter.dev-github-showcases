import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
