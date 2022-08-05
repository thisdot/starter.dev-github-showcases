import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
})
export class RepositoryDetailsComponent implements OnInit {
  owner = '';
  repo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.owner = this.route.snapshot.paramMap.get('owner') ?? '';
    this.repo = this.route.snapshot.paramMap.get('repo') ?? '';
  }
}
