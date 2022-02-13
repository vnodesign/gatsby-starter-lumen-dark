// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Categories.module.scss';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import { gtagTrack } from '../utils';
import type { PageContext, AllMarkdownRemark } from '../types';
import { useLocation } from '@reach/router';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, description: siteDescription, url: siteUrl } = useSiteMetadata();
  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage} - ${siteTitle}` : `${category} - ${siteTitle}`;
  gtagTrack('CategoryList', 'view', 'category_list');
  const location = useLocation();

  return (
    <div className={styles.categories}>
    <Layout title={pageTitle} description={siteDescription}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${siteUrl}${location.pathname}`}/>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <Sidebar />
      <Page title={category}>
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
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { category: { eq: $category }, template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            authorName
            description
            category
            title
            thumbnail
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
