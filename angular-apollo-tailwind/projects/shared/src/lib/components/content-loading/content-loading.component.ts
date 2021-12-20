import { Component } from '@angular/core';

@Component({
  selector: 'sd-loading',
  template: `<div class="flex space-x-1">
    <div class="bg-gray-600 w-2 h-2 rounded-full animate-bounce delay-10"></div>
    <div class="bg-gray-600 w-2 h-2 rounded-full animate-bounce delay-20"></div>
    <div class="bg-gray-600 w-2 h-2 rounded-full animate-bounce delay-30"></div>
  </div>`,
})
export class ContentLoadingComponent {}
