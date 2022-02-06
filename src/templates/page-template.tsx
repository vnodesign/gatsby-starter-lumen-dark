// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as styles from '../assets/scss/components/Layout/Page.module.scss';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  };
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription = '', thumbnail } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const thumbnailUrl = thumbnail;

  return (
    <div className={styles.page}>
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} thumbnail={thumbnailUrl}>
      <HelmetProvider>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      </HelmetProvider>
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
    </div>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        authorName
        description
        thumbnail
      }
    }
  }
`;

export default PageTemplate;
