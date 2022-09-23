import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfigModule } from '@this-dot/route-config';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    path: '404',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouteConfigModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
