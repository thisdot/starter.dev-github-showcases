import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.css'],
})
export class RepoHeaderComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  @Input() isPrivate = false;
  @Input() watchers = 0;
  @Input() stargazers = 0;
  @Input() forks = 0;
  @Input() issuesCount = 0;
  @Input() pullsCount = 0;

  basePath = '';

  ngOnInit(): void {
    this.basePath = `/${this.owner}/${this.name}`;
  }
}
