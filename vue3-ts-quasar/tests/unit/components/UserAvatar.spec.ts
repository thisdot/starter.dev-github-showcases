import { shallowMount } from '@vue/test-utils';
import UserAvatar from '@/components/UserAvatar/UserAvatar.vue';

const testData = {
  size: 100,
  unit: 'px',
  img: 'https://place-hold.it/64x64',
};

describe('UserAvatar', () => {
  it('should mount', () => {
    const wrapper = shallowMount(UserAvatar, {
      props: {
        ...testData,
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
