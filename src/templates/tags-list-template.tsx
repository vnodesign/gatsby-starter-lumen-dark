// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Tags-list.module.scss';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';
import { useLocation } from '@reach/router';

const TagsListTemplate = () => {
  const { title, description, url} = useSiteMetadata();
  const tags = useTagsList();
  const location = useLocation();
  return (
    <div className={styles.tags}>
    <Layout title={`Tags - ${title}`} description={description}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${url}${location.pathname}`}/>
      <meta name="robots" content="follow, noindex" />
      </Helmet>
      <Sidebar />
      <Page title="Tags">
      <div className={styles.tags__tagsList}>
        <ul className={styles.tags__tagsList__list}>
          {tags.map((tag) => (
            <li className={styles.tags__tagsList__listItem} key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className={styles.tags__tagsList__listItemLink} title={tag.fieldValue}>{tag.fieldValue}</Link>
            </li>
          ))}
        </ul>
      </div>
      </Page>
    </Layout>
    </div>
  );
};

export default TagsListTemplate;
