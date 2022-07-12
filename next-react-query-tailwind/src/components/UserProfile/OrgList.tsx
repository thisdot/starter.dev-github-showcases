import type { Organization } from './types';
import Image from 'next/image';
import styles from './OrgList.module.css';

interface OrgListProps {
  organizations: Organization[];
}

function OrgList({ organizations }: OrgListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Organizations</h2>
      <div data-testid="profile page orgs" className={styles.list}>
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} className={styles.listItem}>
            <Image src={avatarUrl} alt="Organization" layout="fill" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrgList;
