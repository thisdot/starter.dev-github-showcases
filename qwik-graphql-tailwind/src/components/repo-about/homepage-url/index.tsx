import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LinkIcon } from '~/components/icons';
import * as styles from '../repo-about.className';

interface HomepageUrlProps {
  homepageUrl?: string | null;
}

export const HomepageUrl = component$(({ homepageUrl }: HomepageUrlProps) => {
  if (!homepageUrl) {
    return null;
  }
  return (
    <div class={styles.linkContainer}>
      <LinkIcon className={styles.linkIcon} />
      <Link href={homepageUrl} class={styles.link} target="_blank">
        {homepageUrl}
      </Link>
    </div>
  );
});
