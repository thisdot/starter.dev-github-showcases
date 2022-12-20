import { component$ } from '@builder.io/qwik';
import { OrganizationNodes } from '../../utils/types';
import * as styles from './org-list.classNames';

export interface OrgListProps {
  organizations: OrganizationNodes[];
}

export const OrgList = component$(({ organizations }: OrgListProps) => {
  return (
    <div class={styles.container}>
      <h2 class={styles.heading}>Organizations</h2>
      <div class={styles.list}>
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} class={styles.listItem}>
            <img src={avatarUrl} alt="Organization" style={{ objectFit: 'fill' }} />
          </div>
        ))}
      </div>
    </div>
  );
});
