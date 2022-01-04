import { NgModule } from '@angular/core';
import { FormatDistancePipe, RoundUpPipe } from './';
import { MarkdownPipe } from './markdown/markdown.pipe';

@NgModule({
  declarations: [FormatDistancePipe, RoundUpPipe, MarkdownPipe],
  exports: [FormatDistancePipe, RoundUpPipe, MarkdownPipe],
})
export class PipesModule {}
