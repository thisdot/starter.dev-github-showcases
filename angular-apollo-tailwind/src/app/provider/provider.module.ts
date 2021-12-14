import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedirectComponent } from './redirect/redirect.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: ProviderComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
];

@NgModule({
  declarations: [ProviderComponent, RedirectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProviderModule {}
