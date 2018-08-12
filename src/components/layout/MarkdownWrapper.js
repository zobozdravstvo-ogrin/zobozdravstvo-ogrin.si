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
          <Section pad="none" align="center">
            <Box
              direction="row"
              justify="start"
              size={{width: 'xxlarge'}}
              pad={{horizontal: 'small', vertical: 'medium', between: 'large'}}>
              <Box basis="2/3">
                {this.props.children}
              </Box>
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
