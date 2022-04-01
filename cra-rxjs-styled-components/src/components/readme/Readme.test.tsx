import { render } from '@testing-library/react';
import Readme from './Readme';

describe('Readme component', () => {
  test('renders Readme component', () => {
    render(
      <Readme
        username="thisdot"
        branch="main"
        repository="starter.dev-github-showcases"
      />
    );
  });
});
