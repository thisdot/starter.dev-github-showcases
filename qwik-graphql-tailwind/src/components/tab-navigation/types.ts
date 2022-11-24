import { Component } from '@builder.io/qwik';

export interface TabItem {
  title: string;
  path?: string;
  Icon: Component<{ className?: string }>;
  count?: number;
}
