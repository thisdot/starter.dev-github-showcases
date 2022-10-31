import { gists } from './data';
import { For } from 'solid-js';
import { Link } from '@solidjs/router';

const GistPanel = () => {
  const dummyGists = gists;
  return (
    <div class="h-full min-h-[30rem] pt-8 px-8">
      <div class=" border-y border-y-gray-300 py-4">
        <h3 class="font-bold">Gists</h3>
      </div>
      <ul class="flex flex-col gap-2 mt-4">
        <For each={dummyGists}>
          {(gist) => (
            <li class="text-base transition-colors delay-75 text-dark-800 hover:underline hover:text-primary-400 w-fit">
              <Link href={gist.url} target="_blank">
                <span>{gist.name}</span>
              </Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default GistPanel;
