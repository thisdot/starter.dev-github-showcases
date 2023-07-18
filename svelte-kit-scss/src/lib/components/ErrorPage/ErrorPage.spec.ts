import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ErrorFlash from './ErrorFlash.svelte';
import ErrorMain from './ErrorMain.svelte';

describe('ErrorFlash', () => {
  const message = 'An Error Occured';
  beforeEach(() => {
    render(ErrorFlash, {
      message,
    });
  });

  it('should should render error message', () => {
    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('ErrorMain', () => {
  it('should render 410 error status', () => {
    const status = 410;
    const [first, second, third] = Array.from(String(status), Number);

    render(ErrorMain, {
      status,
    });

    const firstPart = screen.getByText(first);
    const secondPart = screen.getByText(second);
    const thirdPart = screen.getByText(third);

    expect(firstPart).toBeTruthy();
    expect(secondPart).toBeTruthy();
    expect(thirdPart).toBeTruthy();
  });

  it('should render 500 error status with github icon', () => {
    const status = 500;
    const statusNumbers = Array.from(String(status), Number);

    const { container } = render(ErrorMain, {
      status,
    });

    const firstPart = screen.getByText(statusNumbers[0]);
    const secondPart = container.getElementsByClassName('github-icon')[0];
    const thirdPart = screen.getByText(statusNumbers[2]);

    expect(firstPart).toBeTruthy();
    expect(secondPart).toBeTruthy();
    expect(thirdPart).toBeTruthy();
  });
});
