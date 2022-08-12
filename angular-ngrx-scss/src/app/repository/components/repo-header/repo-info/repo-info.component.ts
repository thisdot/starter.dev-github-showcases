import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepositoryInfoComponent {
  @Input() watch = 0;
  @Input() stars = 0;
  @Input() forks = 0;
}
