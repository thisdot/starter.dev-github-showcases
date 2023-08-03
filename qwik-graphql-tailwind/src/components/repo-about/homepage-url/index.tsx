import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LinkIcon } from '~/components/icons';

interface HomepageUrlProps {
  homepageUrl?: string | null;
}

export const HomepageUrl = component$(({ homepageUrl }: HomepageUrlProps) => {
  if (!homepageUrl) {
    return null;
  }
  return (
    <div class="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
      <LinkIcon className="w-4 h-4 inline text-gray-700 mr-2 -mt-0.5" />
      <Link href={homepageUrl} class="font-semibold text-blue-600 hover:underline text-sm" target="_blank">
        {homepageUrl}
      </Link>
    </div>
  );
});
