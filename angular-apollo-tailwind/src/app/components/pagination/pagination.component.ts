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

  @Output() changePage: EventEmitter<PaginationEvent> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        after: null,
        before: null,
      },
    });
  }

  async handlePreviousPageClick(): Promise<boolean> {
    return await this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        after: null,
        before: this.pageInfo?.startCursor,
      },
    });
  }

  async handleNextPageClick(): Promise<boolean> {
    return await this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        after: this.pageInfo?.endCursor,
        before: null,
      },
    });
  }
}
