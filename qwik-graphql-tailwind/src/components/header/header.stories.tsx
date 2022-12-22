import { component$ } from '@builder.io/qwik';
import { Meta } from '@storybook/html';
import { storybookMockRouting } from '../../utils';
import Header from './header';

const HeaderDemoComponent = component$(() => {
  storybookMockRouting();
  return (
    <div class="container">
      <Header user={null} />
    </div>
  );
});

export default {
  title: 'Header',
} as Meta;

const Template = () => <HeaderDemoComponent />;

export const Demo: any = Template.bind({});
