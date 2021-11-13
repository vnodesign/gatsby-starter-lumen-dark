// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  };
};

const PostTemplate = ({ data }: Props) => {
  const { url, author, title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { title: postTitle, description: postDescription = '', thumbnail, authorName, date, featured, priceCurrency, price, ratingValue, ratingCount, reviewCount, worstRating, bestRating } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const thumbnailUrl = thumbnail;
  const pathname = window.location.pathname;
  const authorpost = authorName;
  const datepost = date;
  const showschema = featured || false;
  const schemaRatingPriceCurrency = priceCurrency || 0;
  const schemaRatingPrice = price || 0;
  const schemaRatingValue = ratingValue || 0;
  const schemaRatingCount = ratingCount || 0;
  const schemaRatingReviewCount = reviewCount || 0;
  const schemaWorstRating = worstRating || 0;
  const schemaBestRating = bestRating || 0;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} thumbnail={thumbnailUrl}>
      <Helmet>
          <script type="application/ld+json">
            {`{
              "image":"${url}${thumbnailUrl}",
              "publisher":{
                 "@type":"Organization",
                 "logo":{
                    "@type":"ImageObject",
                    "url":"${url}${author.photo}"
                 },
                 "name":"${authorpost}"
              },
              "description":"${metaDescription}",
              "headline":"${postTitle}",
              "dateModified":"${datepost}",
              "@type":"BlogPosting",
              "datePublished":"${datepost}",
              "url":"${url}${pathname}",
              "mainEntityOfPage":{
                 "@type":"WebPage",
                 "@id":"${url}${pathname}"
              },
              "author":{
                 "@type":"Person",
                 "name":"${authorpost}"
              },
              "@context":"https://schema.org"
           }`}
          </script>
          { showschema && (
          <script type="application/ld+json">
            {`{
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${postTitle}",
            "image": "${url}${thumbnailUrl}",
            "description": "${metaDescription}",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "${schemaRatingPriceCurrency}",
              "price": "${schemaRatingPrice}",
              "url": "${url}${pathname}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue" : "${schemaRatingValue}",
              "ratingCount" : "${schemaRatingCount}",
              "reviewCount" : "${schemaRatingReviewCount}",
              "worstRating" : "${schemaWorstRating}",
              "bestRating" : "${schemaBestRating}"
            }
          }`}
          </script>
          ) }
          <meta property="og:type" content="article"/>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Helmet>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        authorName
        category
        description
        tags
        title
        fbCommentUrl
        thumbnail
        featured
        priceCurrency
        price
        ratingValue
        ratingCount
        reviewCount
        worstRating
        bestRating
      }
    }
  }
`;

export default PostTemplate;
