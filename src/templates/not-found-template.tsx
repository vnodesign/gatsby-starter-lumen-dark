// @flow strict
import React from 'react';
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Not-found.module.scss';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { useLocation } from '@reach/router';

const NotFoundTemplate = () => {
  const { title, description, url } = useSiteMetadata();
  const location = useLocation();

  return (
    <div className={styles.notFound}>
    <Layout title={`Not Found - ${title}`} description={description}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${url}${location.pathname}`}/>
      <meta name="robots" content="follow, noindex" />
      </Helmet>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
    </div>
  );
};

export default NotFoundTemplate;
