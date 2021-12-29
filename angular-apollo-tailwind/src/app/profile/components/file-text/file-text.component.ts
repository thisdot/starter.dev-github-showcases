import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-text',
  template: `<pre data-testid="text-block" class="codeBlock">
  <div *ngFor="let line of lines let i = index" class="table-row">
    <span class="lineNumber">{{i + 1}}</span>
    <span class="table-cell">{{line}}</span>
  </div>
</pre>`,
  styleUrls: ['./file-text.component.css'],
})
export class FileTextComponent {
  @Input() set text(val: string) {
    this.lines = val.split('\n');
  }

  lines: string[] = [];
}
