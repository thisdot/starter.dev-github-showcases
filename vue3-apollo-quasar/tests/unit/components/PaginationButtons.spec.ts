import { mount } from '@vue/test-utils';
import { PaginationButtons } from '@/components';

let wrapper;

beforeAll(() => {
  wrapper = mount(PaginationButtons, {
    props: {
      isPrevActive: false,
      isNextActive: true,
    },
  });
});
describe('PaginationButtons mounting', () => {
  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('PaginationButtons when only prev button is disabled', () => {
  it('should not be able to click the prev button', async () => {
    const prev_btn = wrapper.find('.prev_btn');
    const prev = (wrapper.vm.prev = jest.fn());
    await prev_btn.trigger('click');
    expect(prev.mock.calls.length).toBe(0);
  });

  it('should be able to click next button', async () => {
    const next_btn = wrapper.find('.next_btn');
    const next = (wrapper.vm.next = jest.fn());
    await next_btn.trigger('click');
    expect(next.mock.calls.length).toBe(1);
  });
});

describe('PaginationButtons when both prev and next button are enabled', () => {
  beforeAll(async () => {
    await wrapper.setProps({
      isPrevActive: true,
      isNextActive: true,
    });
  });

  it('should not be able to click the prev button', async () => {
    const prev_btn = wrapper.find('.prev_btn');
    const prev = (wrapper.vm.prev = jest.fn());
    await prev_btn.trigger('click');
    expect(prev.mock.calls.length).toBe(1);
  });

  it('should be able to click next button', async () => {
    const next_btn = wrapper.find('.next_btn');
    const next = (wrapper.vm.next = jest.fn());
    await next_btn.trigger('click');
    expect(next.mock.calls.length).toBe(1);
  });
});

describe('PaginationButtons when only next button is disabled', () => {
  beforeAll(async () => {
    await wrapper.setProps({
      isPrevActive: true,
      isNextActive: false,
    });
  });

  it('should not be able to click the prev button', async () => {
    const prev_btn = wrapper.find('.prev_btn');
    const prev = (wrapper.vm.prev = jest.fn());
    await prev_btn.trigger('click');
    expect(prev.mock.calls.length).toBe(1);
  });

  it('should be able to click next button', async () => {
    const next_btn = wrapper.find('.next_btn');
    const next = (wrapper.vm.next = jest.fn());
    await next_btn.trigger('click');
    expect(next.mock.calls.length).toBe(0);
  });
});
