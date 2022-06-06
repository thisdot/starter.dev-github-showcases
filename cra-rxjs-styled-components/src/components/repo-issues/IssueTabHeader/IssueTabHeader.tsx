import { useCallback, useState } from 'react';
import DetailsDropdown from '../../DetailsDropdown';
import CorrectIcon from '../../icons/CorrectIcon';
import PullRequestIcon from '../../icons/PullRequestIcon';
import type { IssueTabValues } from '../../../types/types';

import { Container, StatusLabel, StatusTab } from './IssueTabHeader.style';
import type { DropdownTitle } from '../../../types/types';

interface Props {
  toggleTab: any;
  closedCount: number;
  openCount: number;
}

export default function IssueTabHeader(props: Props) {
  const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
  const [openDropdown, setOpenDropdown] = useState<DropdownTitle | undefined>();
  const { toggleTab, closedCount, openCount } = props;

  const changeTab = (value: IssueTabValues) => {
    toggleTab(value);
    setActiveTab(value);
  };

  const toggleDropdown = useCallback(
    (dropdownName: DropdownTitle) => {
      setOpenDropdown(openDropdown === dropdownName ? undefined : dropdownName);
    },
    [openDropdown]
  );

  return (
    <Container>
      <StatusTab className="pr-tab_left">
        <StatusLabel
          onClick={() => changeTab('open')}
          active={activeTab === 'open'}
        >
          <PullRequestIcon />
          <span>{openCount}</span>
          <span>Open</span>
        </StatusLabel>
        <StatusLabel
          onClick={() => changeTab('closed')}
          active={activeTab === 'closed'}
        >
          <CorrectIcon />
          <span>{closedCount}</span>
          <span>Closed</span>
        </StatusLabel>
      </StatusTab>
      <StatusTab className="pr-tab_right">
        <DetailsDropdown
          title="Label"
          DropdownLabel="Filter by label"
          toggleDropDown={() => toggleDropdown('Label')}
          isOpen={openDropdown === 'Label'}
        >
          <a href="/"> WIP DO NOT MERGE </a>
          <a href="/"> Enhancement </a>
        </DetailsDropdown>
        <DetailsDropdown
          title="Sort"
          DropdownLabel="Sort by"
          toggleDropDown={() => toggleDropdown('Sort')}
          isOpen={openDropdown === 'Sort'}
        >
          <a href="/">Newest </a>
          <a href="/">Oldest</a>
          <a href="/">Most Commented</a>
          <a href="/">Least Commented</a>
          <a href="/">Resently Updated</a>
          <a href="/">Least Resently Updated</a>
        </DetailsDropdown>
      </StatusTab>
    </Container>
  );
}
