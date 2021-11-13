// @flow strict
import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Helment from 'react-helmet';
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata, useCategoriesList } from "../hooks";

const CategoriesListTemplate = () => {
  const { url, author, title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();
  const pathname = window.location.pathname;
  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Helment>
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
              "headline":"Categories",
              "@type":"WebPage",
              "url":"${url}${pathname}",
              "@context":"https://schema.org"
           }`}
      </script>
      <meta property="og:type" content="article"/>
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
