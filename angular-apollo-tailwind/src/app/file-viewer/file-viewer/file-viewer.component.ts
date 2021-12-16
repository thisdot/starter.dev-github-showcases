import { Component, Input } from '@angular/core';
import { Language } from '../utils/language';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css'],
})
export class FileViewerComponent {
  @Input() text = '';
  @Input() byteSize = 0;
  @Input() lines = 0;
  @Input() language: Language | undefined = undefined;
}
