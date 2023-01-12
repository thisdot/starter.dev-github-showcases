import { GITHUB_API_REQUEST_TIMEOUT_SECONDS } from '$lib/constants/github/github-api-request-timeout';
import type { Navigation } from '@sveltejs/kit';
import { get, readable, writable } from 'svelte/store';

const LOCAL_STORAGE_KEY_ROUTE_LOAD_STATS = 'route_load_stats';

export type RoutesLoadStats = { [routeId: string]: number[] };

const getRouteLoadStats = (): RoutesLoadStats => {
  const serialized = localStorage.getItem(LOCAL_STORAGE_KEY_ROUTE_LOAD_STATS);
  const stats: RoutesLoadStats = serialized ? JSON.parse(serialized) : {};
  return stats;
};

const GITHUB_API_REQUEST_TIMEOUT_MILISECONDS = GITHUB_API_REQUEST_TIMEOUT_SECONDS * 1000;

const estimateRouteLoadTime = (routeId: string): number => {
  const stats: RoutesLoadStats = getRouteLoadStats();
  const lastTimeouts = stats[routeId] || [GITHUB_API_REQUEST_TIMEOUT_MILISECONDS];
  const averageTimeoutRounded = Math.round(
    lastTimeouts.reduce((a, b) => a + b, 0) / lastTimeouts.length
  );
  return averageTimeoutRounded;
};

const upsertRouteLoadStat = (routeId: string, loadTime: number): void => {
  const serialized = localStorage.getItem(LOCAL_STORAGE_KEY_ROUTE_LOAD_STATS);
  const stats: RoutesLoadStats = serialized ? JSON.parse(serialized) : {};
  const timeouts = stats[routeId] || [];
  stats[routeId] = [...timeouts, loadTime].slice(-3);
  const serializedNew = JSON.stringify(stats);
  localStorage.setItem(LOCAL_STORAGE_KEY_ROUTE_LOAD_STATS, serializedNew);
};

const PROGRESS_START = 0;
const PROGRESS_COMPLETED = 1;

let destinationRouteId: string | null = null;
let navigationStartTime: number | null = null;

const navigationProgressWritable = writable<number>(PROGRESS_COMPLETED);
export const navigationProgress = readable<number>(get(navigationProgressWritable), (set) =>
  navigationProgressWritable.subscribe((x) => set(x))
);

export const setNavigation = (navigation: Navigation | null): void => {
  const currentTime = new Date().getTime();
  const isNavigationStart = Boolean(navigation);

  if (isNavigationStart) {
    navigationStartTime = currentTime;
    destinationRouteId = navigation?.to?.route.id || null;
    navigationProgressWritable.set(PROGRESS_START);
  } else if (destinationRouteId && navigationStartTime) {
    const loadTime = currentTime - navigationStartTime;
    upsertRouteLoadStat(destinationRouteId, loadTime);
    navigationProgressWritable.set(PROGRESS_COMPLETED);
    navigationStartTime = null;
    destinationRouteId = null;
  }
};

const FRACTION_DIVISOR = 10;
let timeoutId: NodeJS.Timeout | undefined = undefined;
navigationProgressWritable.subscribe((progress) => {
  if (progress < PROGRESS_COMPLETED) {
    if (destinationRouteId) {
      const estimatedLoadTime = estimateRouteLoadTime(destinationRouteId);
      const updateInterval = Math.floor(estimatedLoadTime / FRACTION_DIVISOR);
      const newProgress = progress + PROGRESS_COMPLETED / FRACTION_DIVISOR;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const actualProgress = get(navigationProgressWritable);
        if (actualProgress < PROGRESS_COMPLETED && newProgress < PROGRESS_COMPLETED) {
          navigationProgressWritable.set(newProgress);
        }
      }, updateInterval);
    }
  }
});
