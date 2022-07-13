import { Status } from '../types';

export type Issue = {
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
  status: Status;
  messageCount: number;
};
