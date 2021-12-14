import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingTextLineComponent } from './loading-text-line/loading-text-line.component';
import { LoadingPulseDotsComponent } from './loading-pulse-dots/loading-pulse-dots.component';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { LoadingBulletListComponent } from './loading-bullet-list/loading-bullet-list.component';

@NgModule({
  declarations: [
    LoadingTextLineComponent,
    LoadingPulseDotsComponent,
    LoadingBulletListComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
  exports: [
    LoadingTextLineComponent,
    LoadingPulseDotsComponent,
    LoadingBulletListComponent,
  ],
})
export class LoadingModule {}
