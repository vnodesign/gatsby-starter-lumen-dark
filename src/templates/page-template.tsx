// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Page.module.scss';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { MarkdownRemark } from '../types';
import { useLocation } from '@reach/router';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  };
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, description: siteDescription, url: siteUrl} = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription = '', thumbnail } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteDescription;
  const thumbnailUrl = thumbnail;
  const location = useLocation();
  return (
    <div className={styles.page}>
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} thumbnail={thumbnailUrl}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${siteUrl}${location.pathname}`}/>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
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
