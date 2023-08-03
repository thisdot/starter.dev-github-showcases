import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { BookOpenIcon } from '../icons/book-open.icon';
import { Description } from './description';
import { HomepageUrl } from './homepage-url';
import { Topics } from './topic';

export const RepoAboutWidget = component$(() => {
  const store = useContext(RepoContext);

  return (
    <div class="pb-8 space-y-5 border-b-2 border-gray-300">
      <h3 class="text-gray-700 font-semibold">About</h3>
      <div class="text-gray-600">
        <div class="space-y-4">
          <Description text={store.info?.description} />
          <HomepageUrl homepageUrl={store.info?.homepageUrl} />
          <Topics topics={store.info?.topics} />
        </div>
      </div>
      <div>
        <a class="flex items-center text-gray-500 hover:text-blue-500 text-sm cursor-pointer leading-snug">
          <BookOpenIcon className="h-5 w-5 mt-0.5 mr-2" /> Readme
        </a>
      </div>
    </div>
  );
});
