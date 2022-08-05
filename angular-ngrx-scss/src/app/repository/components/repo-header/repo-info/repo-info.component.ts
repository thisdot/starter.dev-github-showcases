import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
})
export class RepositoryInfoComponent {
  @Input() watch = 675;
  @Input() stars = 31;
  @Input() forks = 75;
}
