import { mount } from '@vue/test-utils';
import { PaginationButtons } from '@/components';

describe('PaginationButtons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PaginationButtons, {
      props: {
        isPrevActive: false,
        isNextActive: true,
      },
    });
  });

  // const pagination_btns = wrapper.findAll('.pagination_btn');
  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should not be clickable', async () => {
    const prev_btn = wrapper.find('.prev_btn');
    await prev_btn.trigger('click');
    expect(prev_btn).toBe(false);
  });

  // let count = 0;
  // it.each(pagination_btns)(
  //   'should be either clickable or not pending the diabled state',
  //   async (btn) => {
  //     const prev = (wrapper.vm.prev = jest.fn());
  //     const next = (wrapper.vm.next = jest.fn());
  //     await btn.trigger('click');
  //     if (count === 0) {
  //       expect(prev).toBeCalledTimes(0);
  //     } else {
  //       expect(next).toBeCalledTimes(1);
  //     }
  //     count++;
  //   },
  // );
  // count = 0;
});
