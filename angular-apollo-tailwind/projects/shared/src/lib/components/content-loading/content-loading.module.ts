import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { TextLineLoadingComponent } from './text-line-loading/text-line-loading.component';
import { PulseDotsLoadingComponent } from './pulse-dots-loading/pulse-dots-loading.component';
import { BulletListLoadingComponent } from './bullet-list-loading/bullet-list-loading.component';

@NgModule({
  declarations: [
    TextLineLoadingComponent,
    PulseDotsLoadingComponent,
    BulletListLoadingComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
  exports: [
    TextLineLoadingComponent,
    PulseDotsLoadingComponent,
    BulletListLoadingComponent,
  ],
})
export class ContentLoadingModule {}
