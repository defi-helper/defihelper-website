import React from 'react';
import { Helmet } from 'react-helmet-async';

import OpenGraph from 'src/assets/images/ba-opengraph.jpg';

export type HeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
};

const SITE_URL = 'https://bondappetit.io';

const SITE_DESCRIPTION =
  'The first DeFi protocol that connects real-world debt instruments with the Ethereum ecosystem';

export const Head: React.FC<HeadProps> = (props) => {
  const siteTitle = ['BondAppetit', props.title].filter(Boolean).join(' - ');

  const {
    ogImage = OpenGraph,
    ogUrl = SITE_URL,
    description = SITE_DESCRIPTION
  } = props;

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
