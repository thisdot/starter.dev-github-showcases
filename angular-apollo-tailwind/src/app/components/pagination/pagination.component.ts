import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageInfo } from '../../gql';

interface BeforePageEvent {
  before?: string | null;
}
interface AfterPageEvent {
  after?: string | null;
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
