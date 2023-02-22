import { createSignal } from 'solid-js';
import {
  Issue,
  LabelProps,
  MilestoneProps,
  PageInfo,
} from '~/types/issues-type';

type IssuesStore =
  | {
      openIssues:
        | {
            issues: never[];
            totalCount: number;
            pageInfo: {
              hasNextPage: boolean;
              hasPreviousPage: boolean;
            };
          }
        | {
            issues: Issue[];
            totalCount: number;
            pageInfo: PageInfo;
          };
      closedIssues:
        | {
            issues: never[];
            totalCount: number;
            pageInfo: {
              hasNextPage: boolean;
              hasPreviousPage: boolean;
            };
          }
        | {
            issues: Issue[];
            totalCount: number;
            pageInfo: PageInfo;
          };
      milestones: MilestoneProps[];
      labels: LabelProps[];
    }
  | undefined;

const [issuesStore, setIssuesStore] = createSignal<IssuesStore>(undefined);

export { issuesStore, setIssuesStore };
