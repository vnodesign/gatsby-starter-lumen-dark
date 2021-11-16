// @flow strict
import React from 'react';
import * as styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']} itemScope="itemscope" itemType="https://schema.org/WPFooter"><span itemProp="copyrightHolder" itemScope="itemscope" itemType="https://schema.org/Organization">{copyright}</span></div>
);

export default Copyright;
