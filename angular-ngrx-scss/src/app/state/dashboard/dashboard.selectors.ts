import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const dashboardFeatureKey = 'dashboard';

export const selectDashboardState =
  createFeatureSelector<DashboardState>(dashboardFeatureKey);
