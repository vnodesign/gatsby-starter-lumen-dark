// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import { gtagTrack } from '../../utils';
import * as styles from '../../assets/scss/components/Feed/Feed.module.scss';
type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div>
    {edges.map((edge) => (
      <article className={styles.feed__item} key={edge.node.fields.slug} itemScope itemType="http://schema.org/Article">
        <Link className={styles.feed__itemThumbnail} to={edge.node.fields.slug} onClick={() => gtagTrack('ThumbLink', 'click', edge.node.fields.slug, { title: edge.node.frontmatter.title })} title={edge.node.frontmatter.title}><img itemProp="image" src={edge.node.frontmatter.thumbnail} decoding="async" loading="eager" alt={edge.node.frontmatter.title} width="600" height="400" /></Link>
        <div className={styles.feed__itemMeta}>
            <span className={styles.feed__itemMetaAuthor} itemProp="author" itemScope itemType="https://schema.org/Person"><Link to="/" title={edge.node.frontmatter.authorName} itemProp="url"><span itemProp="name">{edge.node.frontmatter.authorName}</span></Link></span>
            {/* <span className={styles.feed__itemMetaDivider} />
            <span className={styles.feed__itemMetaCategory}>
              <Link to={edge.node.fields.categorySlug} className={styles.feed__itemMetaCategoryLink} onClick={() => gtagTrack('CategoryLink', 'click', edge.node.fields.categorySlug)} title={edge.node.frontmatter.category}>{edge.node.frontmatter.category}</Link>
            </span> */}
            <span className={styles.feed__itemMetaDivider} />
            <time className={styles.feed__itemMetaTime} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>{ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</time>
        </div>
        <h2 className={styles.feed__itemTitle} itemProp="headline">
          <Link className={styles.feed__itemTitleLink} to={edge.node.fields.slug} onClick={() => gtagTrack('PostLink', 'click', edge.node.fields.slug, { title: edge.node.frontmatter.title })} title={edge.node.frontmatter.title} itemProp="url">{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles.feed__itemDescription} itemProp="description">{edge.node.frontmatter.description}</p>
      </article>
    ))}
  </div>
);

export default Feed;
