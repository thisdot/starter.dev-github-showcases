import { AppInput } from '@/components';
import { mount } from '@vue/test-utils';

describe('AppInput', () => {
  it.todo('should mount without error and also update value');
  const wrapper = mount(AppInput);
  const handleInputChange = (input) =>
    (input.element as HTMLInputElement).value;

  it('should mount', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should update value', async () => {
    const input = wrapper.find('input[type="text"]');
    await input.setValue('New search');
    expect(handleInputChange(input)).toBe('New search');
  });
});
