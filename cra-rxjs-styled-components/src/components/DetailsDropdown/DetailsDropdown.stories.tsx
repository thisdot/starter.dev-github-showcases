import { ComponentStory, ComponentMeta } from '@storybook/react';
import DetailsDropdown from './DetailsDropdown';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'DetailsDropdown',
  component: DetailsDropdown,
  args: {
    title: 'Milestones',
    DropdownLabel: 'Filter by Milestones',
    isOpen: false,
    toggleDropDown: () => {},
  },
} as ComponentMeta<typeof DetailsDropdown>;

export const Default: ComponentStory<typeof DetailsDropdown> = (args) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <DetailsDropdown
      title={args.title}
      DropdownLabel={args.DropdownLabel}
      isOpen={args.isOpen}
      toggleDropDown={handleClose}
    >
      <a href="">Issues with no milestones</a>
      <a href="">Serverless Migrations</a>
    </DetailsDropdown>
  );
};
