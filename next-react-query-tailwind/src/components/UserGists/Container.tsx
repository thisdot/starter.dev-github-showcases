import type { ReactNode } from 'react';
import styles from './UserGists.module.css';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <h3 data-testid="show gists list" className="font-semibold">
        Gists
      </h3>
      {children}
    </div>
  );
}

export default Container;
