import React, { useState } from 'react';
import PullRequestView from './PullRequest.view';
import type { PullRequest } from './PullRequest.type';
import type { PRTabValues } from '../types';

export default function PullRequestCtrl() {
  const [activeTab, setActiveTab] = useState<PRTabValues>('open');
  const OPEN_PRS: PullRequest[] = [
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'open',
      messageCount: 8,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'open',
      messageCount: 8,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'open',
      messageCount: 0,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'open',
      messageCount: 2,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'open',
      messageCount: 3,
    },
  ];
  const CLOSED_PRS: PullRequest[] = [
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'merged',
      messageCount: 8,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'merged',
      messageCount: 8,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'merged',
      messageCount: 8,
    },
    {
      title: 'Remix/Feature/125 individual repo page',
      openedNum: '#134 opened',
      openedDay: 'yesterday',
      openedBy: 'by vyktoremario',
      status: 'closed',
      messageCount: 8,
    },
  ];

  return (
    <PullRequestView
      pullRequests={activeTab === 'open' ? OPEN_PRS : CLOSED_PRS}
      changeActiveTab={setActiveTab}
    />
  );
}
