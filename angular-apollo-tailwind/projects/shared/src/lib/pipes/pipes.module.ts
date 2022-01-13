import { NgModule } from '@angular/core';
import { RoundUpPipe } from './number/round-up.pipe';
import { FormatDistancePipe } from './dfns/format-distance.pipe';
import { MarkdownPipe } from './markdown/markdown.pipe';

@NgModule({
  declarations: [FormatDistancePipe, RoundUpPipe, MarkdownPipe],
  exports: [FormatDistancePipe, RoundUpPipe, MarkdownPipe],
})
export class PipesModule {}
