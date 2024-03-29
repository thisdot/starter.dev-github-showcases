import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Markdown } from '~/integrations/react/read-md';

import { TOCIcon } from '../icons';
import { Empty } from './empty';

export interface IState {
  readme?: any;
}

export const RepoReadMe = component$(({ readme }: IState) => {
  const { pathname } = useLocation();

  if (readme) {
    return (
      <div class="rounded-md border border-gray-300 my-4" data-testid="readme">
        <header class="p-2.5 border-b border-gray-300 sticky top-0 bg-white z-30">
          <span class="hover:bg-gray-100 mr-2 p-1.5 rounded">
            <TOCIcon className="inline-block -mt-0.5" />
          </span>
          <span class="text-sm font-semibold">README.md</span>
        </header>
        <article class="prose py-6 px-10 max-w-none prose-headings:font-medium prose-p:my-3 prose-p:leading-6 prose-headings:border-b prose-headings:my-1 prose-headings:pb-2 prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-img:inline prose-img:m-0 prose-a:text-blue-600 prose-a:no-underline prose-a:font-normal hover:prose-a:underline prose-li:my-0.5 prose-pre:bg-gray-100  prose-code:text-gray-800 text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-gray-100">
          <Markdown data={readme} />
        </article>
      </div>
    );
  }

  if (!pathname.includes('tree')) {
    return <Empty />;
  }

  return null;
});
