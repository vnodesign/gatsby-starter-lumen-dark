// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { author, url, title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;


  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
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
                "description":"${siteSubtitle}",
                "headline":"${siteTitle}",
                "@type":"WebSite",
                "sameAs":[
                    "https://twitter.com/${author.contacts.twitter}",
                    "https://www.facebook.com/${author.contacts.facebook}",
                    "https://github.com/${author.contacts.github}"
                ],
                "url":"${url}",
                "name":"${siteTitle}",
                "@context":"https://schema.org"
              }`}
          </script>
          <meta property="og:type" content="website"/>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Helmet>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            authorName
            category
            description
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
