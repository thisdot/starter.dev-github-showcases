import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo } from 'src/app/gql/models/repo-issues';

interface BeforePageEvent {
  before?: string;
}
interface AfterPageEvent {
  after?: string;
}
type ChangePageEvent = BeforePageEvent | AfterPageEvent;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageInfo: PageInfo | null = null;

  @Output() changePage: EventEmitter<ChangePageEvent> = new EventEmitter();

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
