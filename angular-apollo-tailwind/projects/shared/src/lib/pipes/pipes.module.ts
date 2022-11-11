import { NgModule } from '@angular/core';
import { RoundUpPipe } from './number/round-up.pipe';
import { FormatDistancePipe } from './dfns/format-distance.pipe';
import { MarkdownPipe } from './markdown/markdown.pipe';
import { GenerateUrlWithProtocolPipe } from './generate-url-with-protocol/generate-url-with-protocol.pipe';

@NgModule({
  declarations: [
    FormatDistancePipe,
    RoundUpPipe,
    MarkdownPipe,
    GenerateUrlWithProtocolPipe,
  ],
  exports: [
    FormatDistancePipe,
    RoundUpPipe,
    MarkdownPipe,
    GenerateUrlWithProtocolPipe,
  ],
})
export class PipesModule {}
