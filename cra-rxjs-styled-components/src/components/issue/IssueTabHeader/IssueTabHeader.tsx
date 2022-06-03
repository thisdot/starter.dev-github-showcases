import { useCallback, useState } from 'react';
import DetailsDropdown from '../../DetailsDropdown';
import CorrectIcon from '../../icons/CorrectIcon';
import IssueIcon from '../../icons/IssueIcon';
import type { IssueTabValues, DropdownTitle } from '../types';
import { Link } from 'react-router-dom';
import { Container, StatusLabel, StatusTab } from './IssueTabHeader.style';
interface Props {
  toggleTab: (value: IssueTabValues) => void;
}

export default function IssueTabHeader({ toggleTab }: Props) {
  const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
  const [openDropdown, setOpenDropdown] = useState<DropdownTitle>();

  const changeTab = (value: IssueTabValues) => {
    toggleTab(value);
    setActiveTab(value);
  };

  const toggleDropdown = useCallback(
    (dropdownName: DropdownTitle) => {
      setOpenDropdown((prevValue) =>
        prevValue === dropdownName ? undefined : dropdownName
      );
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
          <Link to="/"> Issues with no milestones </Link>
          <Link to="/"> Serverless Migrations </Link>
        </DetailsDropdown>
        <DetailsDropdown
          title="Label"
          DropdownLabel="Filter by label"
          toggleDropDown={() => toggleDropdown('Label')}
          isOpen={openDropdown === 'Label'}
        >
          <Link to="/"> WIP DO NOT MERGE </Link>
          <Link to="/"> Enhancement </Link>
        </DetailsDropdown>
        <DetailsDropdown
          title="Sort"
          DropdownLabel="Sort by"
          toggleDropDown={() => toggleDropdown('Sort')}
          isOpen={openDropdown === 'Sort'}
        >
          <Link to="/">Newest </Link>
          <Link to="/">Oldest</Link>
          <Link to="/">Most Commented</Link>
          <Link to="/">Least Commented</Link>
          <Link to="/">Resently Updated</Link>
          <Link to="/">Least Resently Updated</Link>
        </DetailsDropdown>
      </StatusTab>
    </Container>
  );
}
