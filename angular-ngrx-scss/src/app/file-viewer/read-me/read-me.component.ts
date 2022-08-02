import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMeComponent {
  @Input() readme = '';

  encodeReadmeURI(text: string): string {
    return atob(text);
  }
}
