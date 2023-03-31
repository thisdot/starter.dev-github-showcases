import { fireEvent, render, screen } from '@testing-library/react-native';
import Pagination from '.';

const onPressPrevMock = jest.fn();
const onPressNextvMock = jest.fn();

describe('Pagination', () => {
  it('The Pagination component is rendered', () => {
    render(
      <Pagination
        goToNext={onPressNextvMock}
        goToPrev={onPressPrevMock}
        hasNextPage={true}
        hasPrevPage={true}
      />
    );
    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('should show a disabled Prev and Next button', () => {
    render(
      <Pagination
        goToNext={onPressNextvMock}
        goToPrev={onPressPrevMock}
        hasNextPage={false}
        hasPrevPage={false}
      />
    );
    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    fireEvent(prevButton, 'press');
    expect(onPressPrevMock).not.toBeCalled();

    fireEvent(nextButton, 'press');
    expect(onPressNextvMock).not.toBeCalled();
  });

  it('should only have a disabled Prev button', () => {
    render(
      <Pagination
        goToNext={onPressNextvMock}
        goToPrev={onPressPrevMock}
        hasNextPage={true}
        hasPrevPage={false}
      />
    );
    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    fireEvent(prevButton, 'press');
    expect(onPressPrevMock).not.toBeCalled();

    fireEvent(nextButton, 'press');
    expect(onPressNextvMock).toBeCalled();
  });
});
