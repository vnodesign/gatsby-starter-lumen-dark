// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import * as styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  subtitle: string
  description?: string,
  thumbnail?: string
};

const Layout = (location, {children, title, subtitle, description, thumbnail = '' }: Props) => {
  const { author, url, facebookComment } = useSiteMetadata();
  const metaImage = thumbnail || author.cover;
  const metaImageUrl = url + metaImage;
  const appID = facebookComment.appId;
  const baseUrl = location.href ? location.href : '';
  return (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={metaImageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="fb:app_id" content={appID} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImageUrl} />
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
            "headline":"${title}",
            "@type":"WebSite",
            "sameAs":[
              "https://twitter.com/${author.contacts.twitter}",
              "https://www.facebook.com/${author.contacts.facebook}",
              "https://github.com/${author.contacts.github}"
            ],
            "url":"${url}",
            "name":"${title}",
            "@context":"https://schema.org"
        }`}
      </script>
    </Helmet>
    {children}
  </div>
  );
};

export default Layout;
