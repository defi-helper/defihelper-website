import React from 'react';
import { Helmet } from 'react-helmet-async';

export type HeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
};

const SITE_URL = '';

const SITE_DESCRIPTION = '';

export const Head: React.FC<HeadProps> = (props) => {
  const siteTitle = ['', props.title].filter(Boolean).join(' - ');

  const { ogImage, ogUrl = SITE_URL, description = SITE_DESCRIPTION } = props;

  const image = [ogUrl, ogImage].join('');

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta property="og:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:url" content={ogUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:title" content={siteTitle} />
    </Helmet>
  );
};
