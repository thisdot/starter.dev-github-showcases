import { Meta } from '@storybook/html';
import { Pagination, PaginationProps } from './pagination';

export default {
  title: 'Pagination',
} as Meta;

const Template = (args: PaginationProps) => <Pagination {...args} />;

export const Demo: any = Template.bind({
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: true,
    startCursor: undefined,
    endCursor: undefined,
  },
  owner: 'owner',
});

Demo.args = {
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: true,
    startCursor: 'Y3Vyc29yOjE=',
    endCursor: 'Y3Vyc29yOjI=',
  },
  owner: 'owner',
};
