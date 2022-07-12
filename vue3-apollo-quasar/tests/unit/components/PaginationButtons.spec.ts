import { mount } from '@vue/test-utils';
import { PaginationButtons } from '@/components';

describe('PaginationButtons', () => {
  const wrapper = mount(PaginationButtons, {
    props: {
      isPrevActive: false,
      isNextActive: true,
    },
  });

  const pagination_btns = wrapper.findAll('.pagination_btn');
  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  let count = 0;
  it.each(pagination_btns)(
    'should be either clickable or not pending the diabled state',
    async (btn) => {
      const prev = (wrapper.vm.prev = jest.fn());
      const next = (wrapper.vm.next = jest.fn());
      await btn.trigger('click');
      if (count === 0) {
        expect(prev).toBeCalledTimes(0);
      } else {
        expect(next).toBeCalledTimes(1);
      }
      count++;
    },
  );
  count = 0;
});
