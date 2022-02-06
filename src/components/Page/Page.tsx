import React from 'react';
import * as styles from '../../assets/scss/components/Page/Page.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {

  return (
    <div className={styles.page} itemScope itemType="https://schema.org/Blog">
      <div className={styles.page__inner}>
        { title && <h1 className={styles.page__title}>{title}</h1>}
        <div className={styles.page__body}>{children}</div>
      </div>
    </div>
  );
};

export default Page;