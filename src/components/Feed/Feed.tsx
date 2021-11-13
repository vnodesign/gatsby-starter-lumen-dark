// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import { gtagTrack } from '../../utils';
import * as styles from './Feed.module.scss';
type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <article className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__itemMeta']}>
          <span className={styles['feed__itemMetaAuthor']}>{edge.node.frontmatter.authorName}</span>
          {/* <span className={styles['feed__itemMetaDivider']} />
          <span className={styles['feed__itemMetaCategory']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__itemMetaCategoryLink']} onClick={() => gtagTrack('CategoryLink', 'click', edge.node.fields.categorySlug)} title={edge.node.frontmatter.category}>{edge.node.frontmatter.category}</Link>
          </span> */}
          <span className={styles['feed__itemMetaDivider']} />
          <time className={styles['feed__itemMetaTime']} dateTime={moment(edge.node.frontmatter.date).format('D MMM YYYY')}>{moment(edge.node.frontmatter.date).format('D MMM YYYY')}</time>
        </div>
        <h2 className={styles['feed__itemTitle']}>
          <Link className={styles['feed__itemTitleLink']} to={edge.node.fields.slug} onClick={() => gtagTrack('PostLink', 'click', edge.node.fields.slug, { title: edge.node.frontmatter.title })} title={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__itemDescription']}>{edge.node.frontmatter.description}</p>
        <p className={styles['feed__itemThumbnail']}><img src={edge.node.frontmatter.thumbnail} decoding="async" loading="lazy" alt={edge.node.frontmatter.title} /></p>
      </article>
    ))}
  </div>
);

export default Feed;
