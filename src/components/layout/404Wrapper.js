import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import PageWrapper from './PageWrapper';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

class MarkdownWrapper extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        <Box full={true}>
          <AppHeader />
          <Box full={true} justify="center" align="center" pad="none">
            {this.props.children}
          </Box>
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
