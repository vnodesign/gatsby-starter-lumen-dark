// @flow strict
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as styles from '../assets/scss/components/Layout/Not-found.module.scss';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <div className={styles.notFound}>
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <HelmetProvider>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="follow, noindex" />
      </Helmet>
      </HelmetProvider>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
    </div>
  );
};

export default NotFoundTemplate;
