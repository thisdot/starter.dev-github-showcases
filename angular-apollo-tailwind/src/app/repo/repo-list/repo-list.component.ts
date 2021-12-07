import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
  @Input() user: any = null;

  constructor() {}

  ngOnInit(): void {}
}
