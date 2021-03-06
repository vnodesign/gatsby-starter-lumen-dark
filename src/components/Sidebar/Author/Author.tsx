// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { gtagTrack } from '../../../utils';
import * as styles from '../../../assets/scss/components/Sidebar/Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: boolean
};

const Author = ({ author, isIndex }: Props) => (
  <header className={styles.author} role="banner" itemScope itemType="https://schema.org/WPHeader">
    <Link to="/" onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorPhoto')} title={author.name}>
      <img src={withPrefix(author.photo)} className={styles.author__photo} width="75" height="75" alt={author.name} decoding="async" loading="lazy" />
    </Link>

    {isIndex === true ? (
      <h1 className={styles.author__title} onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorName_Index')} itemProp="name">
        <Link className={styles.author__titleLink} to="/" title={author.name}>{author.name}</Link>
      </h1>
    ) : (
        <h2 className={styles.author__title} onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorName_NotIndex')}>
          <Link className={styles.author__titleLink} to="/" title={author.name}>{author.name}</Link>
        </h2>
    )}
    <p className={styles.author__subtitle}
    onClick={() => gtagTrack('Sidebar_Author', 'click', 'AuthorBio')}
    dangerouslySetInnerHTML={{ __html: author.bio }} itemProp="description" />
  </header>
);

export default Author;
