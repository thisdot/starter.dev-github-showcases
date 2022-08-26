import { ComponentStory, ComponentMeta } from '@storybook/react';
import DetailsDropdown from './DetailsDropdown';
// import { useCallback, useState } from 'react';
// import { DropdownTitle } from '../pull-request/types';
// import { Link } from 'react-router-dom';

export default {
  title: 'DetailsDropdown',
  component: DetailsDropdown,
} as ComponentMeta<typeof DetailsDropdown>;

let openDropdown = '';
const toggleDropdown = (dropdownName: string) => {
  return openDropdown === dropdownName ? undefined : dropdownName;
};

// function MockArgs() {
//   const [openDropdown, setOpenDropdown] = useState<DropdownTitle>();
//   const toggleDropdown = useCallback(
//     (dropdownName: DropdownTitle) => {
//       setOpenDropdown((prevValue) =>
//         prevValue === dropdownName ? undefined : dropdownName
//       );
//     },
//     [openDropdown]
//   );

//   return { openDropdown, toggleDropdown };
// }

// const { openDropdown, toggleDropdown } = MockArgs();

const Template: ComponentStory<typeof DetailsDropdown> = (args) => (
  <DetailsDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Milestones',
  DropdownLabel: 'Filter by Milestones',
  isOpen: openDropdown === 'Milestones',
  toggleDropDown: () => toggleDropdown('Milestones'),
  children: (
    <>
      {/* <Link to="/"> Issues with no milestones </Link>
      <Link to="/"> Serverless Migrations </Link> */}
      {/* <>
      Issues with no milestones <br /> Serverless Migrations
    </> */}
    </>
  ),
};
