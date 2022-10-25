import { component$ } from '@builder.io/qwik';
import { OrganizationNodes } from '../../utils/types';
import * as styles from './org-list.classNames';

interface OrgListProps {
  organizations: OrganizationNodes[];
}

export const OrgList = component$(({ organizations }: OrgListProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Organizations</h2>
      <div className={styles.list}>
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} className={styles.listItem}>
            <img src={avatarUrl} alt="Organization" style={{ objectFit: 'fill' }} />
          </div>
        ))}
      </div>
    </div>
  );
});
