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
import { AllMarkdownRemark, PageContext } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { url, author, title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}` : `All Posts tagged as "${tag}" - ${siteTitle}`;
  const pathname = window.location.pathname;
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
              "headline":"${tag}",
              "@type":"WebPage",
              "url":"${url}${pathname}",
              "@context":"https://schema.org"
           }`}
      </script>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Sidebar />
      <Page title={tag}>
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
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "post" }, draft: { ne: true } } },
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

export default TagTemplate;
