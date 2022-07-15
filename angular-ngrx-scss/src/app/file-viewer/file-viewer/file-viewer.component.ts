import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FileContents } from '../../state/repository';
import { mapLanguageExt } from '../utils/map-lanuage-ext';
import { Language } from '@prism';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileViewerComponent implements OnInit {
  @Input() fileContent!: FileContents;
  extension!: string;
  language!: Language;
  lines!: number;

  ngOnInit(): void {
    this.extension = this.fileContent.name.split('.').pop() as string;
    this.language = mapLanguageExt(this.extension);
    this.lines = this.fileContent.content
      ? this.fileContent.content.split('\n').length
      : 0;
  }
}
