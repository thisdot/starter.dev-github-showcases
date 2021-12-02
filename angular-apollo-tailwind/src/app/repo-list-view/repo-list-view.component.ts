import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-list-view',
  templateUrl: './repo-list-view.component.html',
  styleUrls: ['./repo-list-view.component.css'],
})
export class RepoListViewComponent implements OnInit {
  @Input() user: any = null;

  constructor() {}

  ngOnInit(): void {}
}
