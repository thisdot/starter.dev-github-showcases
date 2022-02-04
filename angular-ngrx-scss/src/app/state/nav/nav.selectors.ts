import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNav from './nav.reducer';

export const selectNavState = createFeatureSelector<fromNav.State>(
  fromNav.navFeatureKey
);
