// @flow strict
import React from "react";
import Author from "./Author";
import Contacts from "./Contacts";
import Menu from "./Menu";
import Copyright from "./Copyright";
import * as styles from "../../assets/scss/components/Sidebar/Sidebar.module.scss";
import { useSiteMetadata } from "../../hooks";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu, copyright } = useSiteMetadata();

  return (
    <div className={styles.sidebar} role="complementary" itemScope itemType="https://schema.org/WPSideBar">
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex || false} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
