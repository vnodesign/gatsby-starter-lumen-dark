// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { url, author, title, subtitle } = useSiteMetadata();
  const pathname = window.location.pathname;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Helmet>
      <script type="application/ld+json">
            {`{
              "image":"${url}${author.photo}",
              "publisher":{
                 "@type":"Organization",
                 "logo":{
                    "@type":"ImageObject",
                    "url":"${url}${author.photo}"
                 }
              },
              "description":"${subtitle}",
              "headline":"Not Found",
              "@type":"WebPage",
              "url":"${url}${pathname}",
              "@context":"https://schema.org"
           }`}
      </script>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="follow, noindex" />
      </Helmet>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
