import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { BookOpenIcon } from '../icons/book-open.icon';
import { Description } from './description';
import { HomepageUrl } from './homepage-url';
import { Topics } from './topic';

export const RepoAboutWidget = component$(() => {
  const store = useContext(RepoContext);

  return (
    <div className="pb-8 space-y-5 border-b-2 border-gray-300">
      <h3 className="text-gray-700 font-semibold">About</h3>
      <div className="text-gray-600">
        <div className="space-y-4">
          <Description text={store.info.data?.description} />
          <HomepageUrl homepageUrl={store.info.data?.homepageUrl} />
          <Topics topics={store.info.data?.topics} />
        </div>
      </div>
      <div>
        <a className="flex items-center text-gray-500 hover:text-blue-500 text-sm cursor-pointer leading-snug">
          <BookOpenIcon className="h-5 w-5 mt-0.5 mr-2" /> Readme
        </a>
      </div>
    </div>
  );
});
