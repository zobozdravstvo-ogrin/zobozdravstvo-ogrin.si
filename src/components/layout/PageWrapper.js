import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  prefixUrlAbsolute,
  prefixUrl
} from '@mapbox/batfish/modules/prefix-url';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import settingsData from '@mapbox/batfish/data/settings-data';
import App from './App';

class PageWrapper extends React.Component {
  render() {
    const { frontMatter, children, location } = this.props;
    const title = `${frontMatter.title} | ${settingsData.site_title}`;

    return (
      <App centered={false}>
        <Helmet>
          <html lang="sl" />
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {frontMatter.description && (
            <meta name="description" content={frontMatter.description} />
          )}

          <meta
            property="og:url"
            content={`${prefixUrlAbsolute(location.pathname)}`}
          />
          <meta property="og:title" content={frontMatter.title} />
          {frontMatter.description && (
            <meta property="og:description" content={frontMatter.description} />
          )}
          <meta property="og:site_name" content={settingsData.site_title} />
          <meta property="og:type" content="website" />

          {frontMatter.image && (
            <meta property="og:image" content={prefixUrl(frontMatter.image)} />
          )}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={prefixUrl('/images/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/x-icon"
            href={prefixUrl('favicon.ico')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={prefixUrl('/images/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={prefixUrl('/images/favicon-16x16.png')}
          />
          <link rel="manifest" href={prefixUrl('/manifest.json')} />
          <link
            rel="mask-icon"
            href={prefixUrl('/images/safari-pinned-tab.svg')}
            color="#379bd4"
          />
          <link rel="shortcut icon" href={prefixUrl('/images/favicon.ico')} />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
          <meta
            name="apple-mobile-web-app-title"
            content={settingsData.site_title}
          />
          <meta name="application-name" content={settingsData.site_title} />
          <meta name="msapplication-TileColor" content="#ffbf00" />
          <meta
            name="msapplication-config"
            content={prefixUrl('/images/browserconfig.xml')}
          />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        {children}
      </App>
    );
  }
}

PageWrapper.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default withLocation(PageWrapper);
