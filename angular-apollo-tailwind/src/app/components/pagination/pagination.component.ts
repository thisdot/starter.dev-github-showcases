import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo } from 'src/app/gql/models/repo-issues';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageInfo: PageInfo | null | undefined = null;

  @Output() changePage: EventEmitter<{
    before?: string;
    after?: string;
  }> = new EventEmitter();

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
