import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationParams } from 'src/app/state/repository';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  private paginationParams: PaginationParams = {
    canNext: false,
    canPrev: false,
    page: 1,
  };

  @Input() set params(params: PaginationParams | null | undefined) {
    if (params) {
      this.paginationParams = params;
    }
  }

  get canNext(): boolean {
    return this.paginationParams.canNext;
  }

  get canPrev(): boolean {
    return this.paginationParams.canPrev;
  }

  @Output() pageChange = new EventEmitter<number>();

  nextPage(): void {
    this.pageChange.emit(this.paginationParams.page + 1);
  }

  prevPage(): void {
    this.pageChange.emit(this.paginationParams.page - 1);
  }
}
