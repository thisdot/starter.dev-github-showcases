import { Container, StatusLabel, StatusTab } from './PRTabHeader.style';
import { useCallback, useState } from 'react';

import CorrectIcon from '../../icons/CorrectIcon';
import DetailsDropdown from '../../DetailsDropdown';
import type { DropdownTitle } from '../types';
import type { PRTabValues } from '../types';
import PullRequestIcon from '../../icons/PullRequestIcon';

interface Props {
  toggleTab: any;
  openPRCount: number;
  closedPRCount: number;
}

export default function PullRequestTabHeader(props: Props) {
  const [activeTab, setActiveTab] = useState<PRTabValues>('open');
  const [openDropdown, setOpenDropdown] = useState<DropdownTitle | undefined>();
  const { toggleTab } = props;

  const changeTab = (value: PRTabValues) => {
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
          <span>{props.openPRCount}</span>
          <span>Open</span>
        </StatusLabel>
        <StatusLabel
          onClick={() => changeTab('close')}
          active={activeTab === 'close'}
        >
          <CorrectIcon />
          <span>{props.closedPRCount}</span>
          <span>Close</span>
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
