import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import UserGists from './UserGists';

describe('User gist card', () => {
  let wrapper;
  const gists = [
    {
      id: 'G_kwDOADjK-doAIGU0OTc3ODQ1ZmRlOGNjZmU1Yzc0MjQxNzlmZGMyZmVh',
      description: 'A react hook that handles firebase storage uploading',
      url: 'https://gist.github.com/e4977845fde8ccfe5c7424179fdc2fea',
      name: 'FormStore.js',
      files: [
        {
          name: 'useFirebaseUploader.ts',
        },
      ],
    },
    {
      id: 'MDQ6R2lzdGQ1Yzc1NTIwMWJiMTI1MmJiNzI2YzQ2ZTIzOTE1Mzgw',
      description:
        'Mobx store for managing form state (built for my react-native app)',
      url: 'https://gist.github.com/d5c755201bb1252bb726c46e23915380',
      name: 'MyFormStore.js',
      files: [
        {
          name: 'MyFormStore.js',
        },
      ],
    },
  ];

  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <UserGists gists={gists} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it(`should have ${gists.length} number of item(s)`, async () => {
    const listItems = await wrapper.findAllByTestId('gist-item');
    expect(listItems.length).toBe(gists.length);
  });
});
