// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Tags.module.scss';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import { AllMarkdownRemark, PageContext } from '../types';
import { useLocation } from '@gatsbyjs/reach-router';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, description: siteDescription, url: siteUrl} = useSiteMetadata();

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
  const location = useLocation();
  return (
    <div className={styles.tags}>
    <Layout title={pageTitle} description={siteDescription}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${siteUrl}${location.pathname}`}/>
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
    </div>
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
