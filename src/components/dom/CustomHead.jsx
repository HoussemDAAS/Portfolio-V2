import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const SITE_URL = 'https://houssemdaas.me';
// OG_IMAGE will be added later when you have your own image

const getSchema = () => ({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Houssem Daas',
  jobTitle: 'Full-Stack Developer & AI Automation Specialist',
  url: SITE_URL,
  email: 'mailto:houssemdaas2@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/houssem-daas/',
    'https://github.com/houssemdaas',
    'https://twitter.com/houssemdaas',
    'https://www.instagram.com/houssemdaas/'
  ],
  alumniOf: [
    { '@type': 'Organization', name: 'Virtual University of Tunis (UVT)' },
    { '@type': 'Organization', name: 'Higher Institute of Technological Studies of Nabeul' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Tunisia',
    addressLocality: 'Tunis'
  }
});

function CustomHead({ title = '', description, keywords }) {
  return (
    <>
      <NextHead>
        {/* General Meta Tags */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Houssem Daas" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* Canonical and Title */}
        <link rel="canonical" href={SITE_URL} />
        <title>{title}</title>

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={SITE_URL} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />

        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ff6b35" />
        <meta name="theme-color" content="#ff6b35" />

        {/* Schema */}
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      </NextHead>
      <NextSeo title={title} description={description} />
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

CustomHead.defaultProps = {
  keywords: [],
};

export default CustomHead;
