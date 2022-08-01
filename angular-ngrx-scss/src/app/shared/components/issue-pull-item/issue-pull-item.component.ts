import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-issue-pull-item',
  templateUrl: './issue-pull-item.component.html',
  styleUrls: ['./issue-pull-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuePullItemComponent {
  itemsList = [
    {
      number: 123,
      state: 'closed',
      title: 'Test Issue Closed',
      body: '',
      user: {},
      labels: [{ color: '8D5494', name: 'Status: Backlog' }],
      assignee: {},
      assignees: [],
      locked: 'False',
      active_lock_reason: '',
      comments: 10,
      closed_at: new Date().toString(),
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
      closed_by: {},
    },
    {
      number: 321,
      state: 'open',
      title: 'Test Issue Open',
      body: '',
      user: {},
      labels: [{ color: '8D5494', name: 'Status: Backlog' }],
      assignee: {},
      assignees: [],
      locked: 'False',
      active_lock_reason: '',
      comments: 25,
      closed_at: '',
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
      closed_by: {},
    },
  ];

  colorMap(color: string): string {
    return `#${color}`;
  }
}
