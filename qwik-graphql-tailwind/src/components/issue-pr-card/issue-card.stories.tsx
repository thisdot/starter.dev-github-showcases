import { Meta } from '@storybook/html';
import { IssuePrCard, IssuePrCardProps } from './card';

export default {
  title: 'Issue Card',
} as Meta;

const Template = (args: IssuePrCardProps) => <IssuePrCard data={args.data} type="issue" />;

export const Demo: any = Template.bind({
  data: {},
});

Demo.args = {
  data: {
    url: 'https://github.com/thisdot/starter.dev-github-showcases/issues#:~:text=Issues%20list-,%5Bsveltekit%2Dpod%5D%2033%20Create%20file%20view,-%23861%20opened%20yesterday',
    title: '[sveltekit-pod] 33 Create file view',
    number: 861,
    isOpen: true,
    createdAt: '2022-11-09T15:00:00Z',
    authorName: 'kenslachtajr',
    commentsCount: 0,
  },
};
