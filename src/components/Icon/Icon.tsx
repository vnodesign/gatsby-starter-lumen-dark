// @flow strict
import React from 'react';
import * as styles from '../../assets/scss/components/Icon/Icon.module.scss';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string
  }
};

const Icon = ({ name, icon }: Props) => (
  <svg className={styles.icon} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
