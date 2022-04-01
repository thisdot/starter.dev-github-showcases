import React from 'react';
import ClosedPRIcon from '../../icons/ClosedPRIcon';
import MergedPRIcon from '../../icons/MergedPRIcon';
import MessageIcon from '../../icons/MessageIcon';
import OpenPRIcon from '../../icons/OpenPRIcon';
import PullRequestCardIssueInfo from '../PullRequestCardIssueInfo';
import { PullRequestCardWrapper } from './PullRequestCard.style';
import type { Status } from '../types';

interface Props {
  status: Status;
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
  messageCount: number;
}

export default function PullRequestCard({
  status,
  title,
  openedBy,
  openedDay,
  openedNum,
  messageCount,
}: Props) {
  const getPRIcon = (status: Status) => {
    switch (status) {
      case 'merged':
        return <MergedPRIcon />;
      case 'closed':
        return <ClosedPRIcon />;
      case 'open':
      default:
        return <OpenPRIcon />;
    }
  };
  return (
    <PullRequestCardWrapper>
      <div className="left">
        {getPRIcon(status)}
        <PullRequestCardIssueInfo
          title={title}
          openedNum={openedNum}
          openedBy={openedBy}
          openedDay={openedDay}
        />
      </div>
      <div className="right">
        {messageCount > 0 && (
          <a href="/" className="message">
            <MessageIcon />
            <span className="count">8</span>
          </a>
        )}
      </div>
    </PullRequestCardWrapper>
  );
}
