import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.scss'],
})
export class RepositoryHeaderComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  basePath = '';

  ngOnInit(): void {
    this.basePath = `/${this.owner}/${this.name}`;
  }
}
