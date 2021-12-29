import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp',
})
export class RoundUpPipe implements PipeTransform {
  transform(count: number): string {
    let countText = `${count}`;
    if (count && count > 1000) {
      const digits = countText.split('');
      digits.splice(digits.length - 3, 3);
      countText = `${digits.join('')}k`;
    }
    return countText;
  }
}
