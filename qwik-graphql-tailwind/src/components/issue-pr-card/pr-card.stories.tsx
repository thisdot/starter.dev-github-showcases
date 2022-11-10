import { Meta } from '@storybook/html';
import { IssuePrCard, IssuePrCardProps } from './card';

export default {
  title: 'Pull Request Card',
} as Meta;

const Template = (args: IssuePrCardProps) => <IssuePrCard data={args.data} type="pr" />;

export const Demo: any = Template.bind({
  data: {},
});

Demo.args = {
  data: {
    url: 'https://github.com/thisdot/starter.dev-github-showcases/pulls#:~:text=Pull%20requests%20list-,feat(solidjs)%3A%20Create%20user%20profile%20layout,-%23866%20opened%206',
    title: 'feat(solidjs): Create user profile layout ',
    number: 866,
    isOpen: false,
    isMerged: true,
    isDraft: false,
    createdAt: '2021-08-06T15:00:00Z',
    authorName: 'Sara Vieira',
    commentsCount: 2,
  },
};
