// @flow strict
import React from 'react';
import moment from 'moment';
import * as styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  category: string
};

const Content = ({ date, authorName, category, body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__boxinfo']}>{authorName} <span className={styles['content__divider']} /> {moment(date).format('D MMM YYYY')} <span className={styles['content__divider']} /> {category}</div>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
