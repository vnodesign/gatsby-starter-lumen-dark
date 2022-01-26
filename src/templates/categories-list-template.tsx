// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Helment from 'react-helmet';
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata, useCategoriesList } from "../hooks";

const CategoriesListTemplate = ({location}) => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();
  const baseUrl = location.href ? location.href : '';

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Helment>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={baseUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helment>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
