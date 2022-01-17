import { ComponentProps, FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

type WrapperOptions = {
  mocks?: ComponentProps<typeof MockedProvider>['mocks'];
};

const wrapper: (options?: WrapperOptions) => FC =
  ({ mocks } = {}) =>
  ({ children }) => {
    return (
      <MemoryRouter>
        <MockedProvider mocks={mocks}>{children}</MockedProvider>
      </MemoryRouter>
    );
  };

const customRender = (ui: ReactElement, options?: WrapperOptions) =>
  render(ui, { wrapper: wrapper(options) });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
