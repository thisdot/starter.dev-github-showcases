import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo, PaginationEvent } from '../../gql';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageInfo: PageInfo | null = null;

  @Output() changePage: EventEmitter<PaginationEvent> = new EventEmitter();

  private get link(): string {
    return this.location.path();
  }

  constructor(private router: Router, private readonly location: Location) {}

  async handlePreviousPageClick(): Promise<boolean> {
    return await this.router.navigate([this.link], {
      queryParams: {
        before: this.pageInfo?.startCursor,
      },
    });
  }

  async handleNextPageClick(): Promise<boolean> {
    return await this.router.navigate([this.link], {
      queryParams: {
        after: this.pageInfo?.endCursor,
      },
    });
  }
}
