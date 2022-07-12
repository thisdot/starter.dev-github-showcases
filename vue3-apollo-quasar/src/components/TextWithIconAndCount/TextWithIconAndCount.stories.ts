import TextWithIconAndCount from './TextWithIconAndCount.vue';

export default {
  title: 'component/TextWithIconAndCount',
  component: TextWithIconAndCount,
};

const Template = () => ({
  components: { TextWithIconAndCount },
  template: `
  <TextWithIconAndCount>
    <template v-slot:icon>
      <q-icon name="fa fa-book"></q-icon>
    </template>
    <template v-slot:title>
      fork
    </template>
    <template v-slot:count>
      <q-badge rounded label="10" style="background: #1b1f2414; color: inherit" />
    </template>
  </TextWithIconAndCount>`,
});

export const Default = Template.bind({});
