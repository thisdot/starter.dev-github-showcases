import Repositories from './Repositories';
import { fireEvent, render } from '@testing-library/react-native';

describe('Repositories', () => {
  const mockedRepo = {
    id: 'id',
    name: 'name',
    description: 'description',
    stargazerCount: 10,
    forkCount: 23,
    visibility: 'Public',
    updatedAt: '1988',
    owner: {
      login: 'owner',
    },
    primaryLanguage: {
      name: 'js',
      color: 'blue',
    },
  };

  it('should mount', () => {
    const wrapper = render(
      <Repositories
        repos={[mockedRepo]}
        goToNext={() => 'next'}
        goToPrev={() => 'prev'}
        hasNextPage={false}
        hasPrevPage={false}
      />
    );

    expect(wrapper).toBeTruthy();
  });

  it('should show info', () => {
    const wrapper = render(
      <Repositories
        repos={[mockedRepo]}
        goToNext={() => 'next'}
        goToPrev={() => 'prev'}
        hasNextPage={false}
        hasPrevPage={false}
      />
    );

    expect(wrapper).toBeTruthy();
    const description = wrapper.getByText('description');
    expect(description).toBeDefined();
  });

  it('should show pagination buttons', () => {
    const nextFn = jest.fn()
    const prevFn = jest.fn()

    const wrapper = render(
      <Repositories
        repos={[mockedRepo]}
        goToNext={nextFn}
        goToPrev={prevFn}
        hasNextPage={true}
        hasPrevPage={true}
      />
    );

    expect(wrapper).toBeTruthy();
    const nextBtn = wrapper.getByText('Next');
    expect(nextBtn).toBeDefined();
    const prevBtn = wrapper.getByText('Prev');
    expect(prevBtn).toBeDefined();
    fireEvent.press(wrapper.getByText('Prev'));
    expect(prevFn).toBeCalled();
    fireEvent.press(wrapper.getByText('Next'));
    expect(nextFn).toBeCalled()
  });
});
