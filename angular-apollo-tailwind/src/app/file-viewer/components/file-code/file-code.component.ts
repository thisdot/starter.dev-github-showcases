import { Component, Input } from '@angular/core';
import { Language, nightOwlLight } from '@prism';

@Component({
  selector: 'app-file-code',
  templateUrl: './file-code.component.html',
  styleUrls: ['./file-code.component.css'],
})
export class FileCodeComponent {
  @Input() text = '';
  @Input() language: Language = '' as Language;

  theme = nightOwlLight;
}
