import { Meta } from '@storybook/html';
import { Pagination, PaginationProps } from './pagination';

export default {
  title: 'Pagination',
} as Meta;

const Template = (args: PaginationProps) => <Pagination {...args} />;

export const Demo: any = Template.bind({});

Demo.args = {
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: undefined,
    endCursor: 'Y3Vyc29yOjI=',
  },
  owner: 'owner',
};
