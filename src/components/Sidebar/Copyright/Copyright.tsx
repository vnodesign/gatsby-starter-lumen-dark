// @flow strict
import React from 'react';
import * as styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <footer className={styles['copyright']} role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
    <span itemProp="copyrightHolder" itemScope itemType="https://schema.org/Organization">{copyright}</span>
  </footer>
);

export default Copyright;
