// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Helmet } from 'react-helmet';
import * as styles from '../assets/scss/components/Layout/Categories-list.module.scss';
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata, useCategoriesList } from "../hooks";
import { useLocation } from '@gatsbyjs/reach-router';

const CategoriesListTemplate = () => {
  const { title, description, url } = useSiteMetadata();
  const categories = useCategoriesList();
  const location = useLocation();

  return (
    <div className={styles.categoriesListPage}>
    <Layout title={`Categories - ${title}`} description={description}>
      <Helmet>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`${url}${location.pathname}`}/>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <Sidebar />
      <Page title="Categories">
      <div className={styles.categoriesList}>
        <ul className={styles.categoriesList__list}>
          {categories.map((category) => (
            <li className={styles.categoriesList__listItem} key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`} className={styles.categoriesList__listItemLink} title={category.fieldValue}>{category.fieldValue}</Link>
            </li>
          ))}
        </ul>
      </div>
      </Page>
    </Layout>
    </div>
  );
};

export default CategoriesListTemplate;
