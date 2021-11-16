// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import * as styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  category: string
};

const Content = ({ date, authorName, category, body, title, categorySlug }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']} itemProp="headline">{title}</h1>
    <div className={styles['content__boxinfo']}><span itemProp="author" itemScope itemType="https://schema.org/Person"><Link to="/" title={authorName} itemProp="url"><span itemProp="name">{authorName}</span></Link></span> <span className={styles['content__divider']} /> <span itemProp="datePublished">{moment(date).format('D MMM YYYY')}</span> <span className={styles['content__divider']} /> {category}</div>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
