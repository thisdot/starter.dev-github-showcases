import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPathSegments } from 'src/app/utils';
@Component({
  selector: 'app-repo-heading',
  templateUrl: './repo-heading.component.html',
  styleUrls: ['./repo-heading.component.css'],
})
export class RepoHeadingComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  @Input() login = '';
  @Input() isPrivate = false;

  ownerPath = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const paths = getPathSegments(this.route.snapshot.url);
    const isOrg = this.login !== paths[0];
    const path = isOrg ? `/orgs/${this.owner}` : `/${this.owner}`;
    this.ownerPath = path;
  }
}
