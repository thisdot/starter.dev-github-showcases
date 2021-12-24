import { ORDER_BY_DIRECTION } from './order-by';
import { ORDER_FIELD } from './order-field';

export interface SortOption {
  field: ORDER_FIELD;
  direction: ORDER_BY_DIRECTION;
}
