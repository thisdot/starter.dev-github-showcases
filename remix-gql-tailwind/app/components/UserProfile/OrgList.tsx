import type { OrganizationNodes } from './types';
import * as styles from './OrgList.classNames';

interface OrgListProps {
  organizations: OrganizationNodes[];
}

function OrgList({ organizations }: OrgListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Organizations</h2>
      <div className={styles.list}>
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} className={styles.listItem}>
            <img
              src={`//${avatarUrl}`}
              alt="Organization"
              style={{ objectFit: 'fill' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrgList;
