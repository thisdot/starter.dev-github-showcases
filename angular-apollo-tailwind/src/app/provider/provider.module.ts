import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedirectComponent } from './redirect/redirect.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProviderComponent, RedirectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProviderComponent,
      },
      {
        path: 'redirect',
        component: RedirectComponent,
      },
    ]),
  ],
})
export class ProviderModule {}
