import React from 'react';
import ClosedIssueIcon from '../../icons/ClosedIssueIcon';
import MessageIcon from '../../icons/MessageIcon';
import OpenIssueIcon from '../../icons/OpenIssueIcon';
import PullRequestIssueInfo from '../../PullRequestIssueInfo';
import { IssueCardWrapper } from './IssueCard.style';
import type { Status } from '../types';

interface Props {
  status: Status;
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
  messageCount: number;
}

export default function IssueCard({
  status,
  title,
  openedBy,
  openedDay,
  openedNum,
  messageCount,
}: Props) {
  const getPRIcon = (status: Status) => {
    switch (status) {
      case 'closed':
        return <ClosedIssueIcon />;
      case 'open':
      default:
        return <OpenIssueIcon />;
    }
  };
  return (
    <IssueCardWrapper>
      <div className="left">
        {getPRIcon(status)}
        <PullRequestIssueInfo
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
    </IssueCardWrapper>
  );
}
