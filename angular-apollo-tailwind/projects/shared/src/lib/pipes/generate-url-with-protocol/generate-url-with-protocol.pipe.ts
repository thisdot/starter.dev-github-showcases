import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateUrlWithProtocol',
})
export class GenerateUrlWithProtocolPipe implements PipeTransform {
  transform(value: string): string {
    return ['http://', 'https://'].some((protocol) =>
      value.startsWith(protocol),
    )
      ? value
      : `https://${value}`;
  }
}
