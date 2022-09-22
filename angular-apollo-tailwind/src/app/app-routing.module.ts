import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfigModule } from '@this-dot/route-config';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () =>
      import('./provider/provider.module').then((m) => m.ProviderModule),
  },
  {
    path: 'redirect',
    redirectTo: 'signin/redirect',
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  //Wild Card Route for 404 request
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: PagenotfoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouteConfigModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
