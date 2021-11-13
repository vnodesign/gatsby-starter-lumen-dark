// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { url, author, title, subtitle } = useSiteMetadata();
  const tags = useTagsList();
  const pathname = window.location.pathname;

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
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
              "description":"${subtitle}",
              "headline":"Tags",
              "@type":"WebPage",
              "url":"${url}${pathname}",
              "@context":"https://schema.org"
           }`}
      </script>
      <meta property="og:type" content="article"/>
      <meta name="robots" content="follow, noindex" />
      </Helmet>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} title={tag.fieldValue}>
                {tag.fieldValue}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
