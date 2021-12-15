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
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouteConfigModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
