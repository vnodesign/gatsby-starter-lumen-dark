// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../../../assets/scss/components/Post/Content.module.scss';

type Props = {
  body: string,
  title: string,
};

const Content = ({ date, authorName, body, title }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.content__title} itemProp="headline">{title}</h1>
    <div className={styles.content__boxinfo}><span itemProp="author" itemScope itemType="https://schema.org/Person"><Link to="/" title={authorName} itemProp="url"><span itemProp="name">{authorName}</span></Link></span> <span className={styles.content__divider} /> <span itemProp="datePublished">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span></div>
    <div className={styles.content__body} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
