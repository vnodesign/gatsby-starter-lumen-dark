// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
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
  const { url, author, title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription = '', thumbnail } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const thumbnailUrl = thumbnail;
  const pathname = window.location.pathname;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} thumbnail={thumbnailUrl}>
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
              "description":"${metaDescription}",
              "headline":"${pageTitle}",
              "@type":"WebPage",
              "url":"${url}${pathname}",
              "@context":"https://schema.org"
           }`}
      </script>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
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
