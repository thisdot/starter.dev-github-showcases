import type { ReactNode } from "react";
import * as styles from "./container.classNames";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <h3 className="font-semibold">Gists</h3>
      {children}
    </div>
  );
}

export default Container;
