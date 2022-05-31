import { useCallback, useState } from 'react';
import DetailsDropdown from '../../DetailsDropdown';
import CorrectIcon from '../../icons/CorrectIcon';
import IssueIcon from '../../icons/IssueIcon';
import type { IssueTabValues } from '../types';

import { Container, StatusLabel, StatusTab } from './IssueTabHeader.style';
import type { DropdownTitle } from '../types';

interface Props {
  toggleTab: any;
}

export default function IssueTabHeader({ toggleTab }: Props) {
  const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
  const [openDropdown, setOpenDropdown] = useState<DropdownTitle | undefined>();

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
          <IssueIcon />
          <span>10</span>
          <span>Open</span>
        </StatusLabel>
        <StatusLabel
          onClick={() => changeTab('close')}
          active={activeTab === 'close'}
        >
          <CorrectIcon />
          <span>14</span>
          <span>Close</span>
        </StatusLabel>
      </StatusTab>
      <StatusTab className="pr-tab_right">
        <DetailsDropdown
          title="Milestones"
          DropdownLabel="Filter by Milestones"
          toggleDropDown={() => toggleDropdown('Milestones')}
          isOpen={openDropdown === 'Milestones'}
        >
          <a href="/"> Issues with no milestones </a>
          <a href="/"> Serverless Migrations </a>
        </DetailsDropdown>
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
