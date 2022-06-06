import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageInfo, PaginationEvent } from '../../gql';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() pageInfo: PageInfo | null = null;
  link: string | null = null;

  @Output() changePage: EventEmitter<PaginationEvent> = new EventEmitter();

  constructor(private router: Router, private readonly location: Location) {}

  ngOnInit(): void {
    this.link = this.location.path();
  }

  prevUrl = `${this.link}?before=${this.pageInfo?.startCursor}`;
  nextUrl = `${this.link}?after=${this.pageInfo?.endCursor}`;

  handlePreviousPageClick() {
    this.router.navigate([this.link], {
      queryParams: {
        before: this.pageInfo?.startCursor,
      },
    });
  }

  handleNextPageClick() {
    this.router.navigate([this.link], {
      queryParams: {
        after: this.pageInfo?.endCursor,
      },
    });
  }
}
