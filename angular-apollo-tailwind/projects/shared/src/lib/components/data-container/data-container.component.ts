import { Component, Input } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'sd-data-container',
  templateUrl: './data-container.component.html',
})
export class DataContainerComponent<R, T extends ApolloQueryResult<R>> {
  @Input() data: T | null = null;
}
