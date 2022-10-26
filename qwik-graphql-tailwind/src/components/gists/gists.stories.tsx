import { Meta } from '@storybook/html';
import GistListItem, { GistListProps } from './gist-list-item';

export default {
  title: 'Gist List Item',
} as Meta;

const Template = ({ gists }: { gists: GistListProps[] }) => (
  <ul className="space-y-2">
    {gists.map((gist) => (
      <GistListItem key={gist.id} {...gist} />
    ))}
  </ul>
);

export const Demo: any = Template.bind({
  gists: [],
});

Demo.args = {
  gists: [
    {
      id: '1',
      name: 'Gist 1',
      url: 'https://gist.github.com/1',
    },
    {
      id: '2',
      name: 'Gist 2',
      url: 'https://gist.github.com/2',
    },
  ],
};
