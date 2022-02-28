// @flow strict
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks';

type Props = {
  children: ReactNode,
  title: string,
  subtitle: string
  description?: string,
  thumbnail?: string
};

const Layout = ({children, title, subtitle, description, thumbnail = '' }: Props) => {
  const { author, url, facebookComment } = useSiteMetadata();
  const metaImage = thumbnail || author.cover;
  const metaImageUrl = url + metaImage;
  const appID = facebookComment.appId;
  return (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={metaImageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="fb:app_id" content={appID} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImageUrl} />
    </Helmet>
    {children}
  </div>
  );
};

export default Layout;
