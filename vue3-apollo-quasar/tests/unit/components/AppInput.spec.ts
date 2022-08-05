import { AppInput } from '@/components';
import { mount } from '@vue/test-utils';

describe('AppInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppInput);
  });
  const handleInputChange = (input) =>
    (input.element as HTMLInputElement).value;

  it('should mount', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have input', async () => {
    const input = wrapper.find('input[type="text"]');
    expect(input.exists()).toBeTruthy();
  });

  it('should update input value', async () => {
    const input = wrapper.find('input[type="text"]');
    await input.setValue('New search');
    expect(handleInputChange(input)).toBe('New search');
  });
});
