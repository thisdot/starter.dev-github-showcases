import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo, PaginationEvent } from '../../gql';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageInfo: PageInfo | null = null;

  @Output() changePage: EventEmitter<PaginationEvent> = new EventEmitter();

  handlePreviousPageClick() {
    this.changePage.emit({
      before: this.pageInfo?.startCursor,
    });
  }

  handleNextPageClick() {
    this.changePage.emit({
      after: this.pageInfo?.endCursor,
    });
  }
}
