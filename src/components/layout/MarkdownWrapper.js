import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import PageWrapper from './PageWrapper';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import DefaultPageLayout from './DefaultPageLayout';
import FrontPageLayout from './FrontPageLayout';

class MarkdownWrapper extends Component {
  render() {
    const { frontMatter } = this.props;
    let layout = null;
    switch (frontMatter.layout) {
      case 'homepage':
        layout = <FrontPageLayout {...this.props} />;
        break;
      default:
        layout = <DefaultPageLayout {...this.props} />;
    }

    return (
      <PageWrapper {...this.props}>
        <Box>
          <AppHeader />
          {layout}
          <AppFooter />
        </Box>
      </PageWrapper>
    );
  }
}

MarkdownWrapper.propTypes = {
  children: PropTypes.any
};

MarkdownWrapper.defaultProps = {};

export default MarkdownWrapper;
