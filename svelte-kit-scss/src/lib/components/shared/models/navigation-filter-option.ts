export interface NavigationFilterOption {
  active: boolean;
  href: string;
  label: string;
  extras?: Record<string, unknown>;
}
