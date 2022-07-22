import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-text',
  templateUrl: './file-text.component.html',
  styleUrls: ['./file-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTextComponent {
  @Input() set text(val: string) {
    this.lines = val.split('\n');
  }

  lines: string[] = [];
}
