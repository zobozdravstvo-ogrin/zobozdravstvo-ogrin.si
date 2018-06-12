import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import PageWrapper from './PageWrapper';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import Section from 'grommet/components/Section';

class MarkdownWrapper extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        <Box>
          <AppHeader />

          <Section pad="small" align="center">
            <Box
              className="content-container"
              size={{ width: { max: 'xxlarge' } }}
              direction="row"
              justify="start"
              align="start"
              pad={{ horizontal: 'large', between: 'small' }}
              flex="grow"
            >
              {this.props.children}
            </Box>
          </Section>
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
