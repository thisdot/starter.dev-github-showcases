import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-heading',
  templateUrl: './repo-heading.component.html',
  styleUrls: ['./repo-heading.component.scss'],
})
export class RepositoryHeadingComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';

  ownerPath = '';

  ngOnInit(): void {
    this.ownerPath = `/${this.owner}`;
  }
}
