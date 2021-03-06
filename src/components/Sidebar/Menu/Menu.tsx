// @flow strict
import React from 'react';
import Link from '../Link';
import { gtagTrack } from '../../../utils';

import * as styles from '../../../assets/scss/components/Sidebar/Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
    isHighlight?: boolean
  }[]
};

const Menu = ({ menu }: Props) => (
    <nav className={styles.menu} role="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
    <ul className={styles.menu__list}>
      {menu.map((item) => (
        <li className={styles.menu__listItem} key={item.path}>
          <Link to={item.path} className={styles.menu__listItemLink} activeClassName={styles.menu__listItemLinkActive} onClick={() => gtagTrack('Menu', 'click', item.path)} partiallyActive={false} title={item.label} itemProp="url"><span itemProp="name">{item.label}</span></Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
