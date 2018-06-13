/*---
title: Članki
description: Seznam člankov
---*/

import PageWrapper from '../src/components/layout/PageWrapper';
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import AppHeader from '../src/components/common/AppHeader';
import AppFooter from '../src/components/common/AppFooter';

class index extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        <Box>
          <AppHeader />
          Seznam člankov
          <AppFooter float={false} pad="none" />
        </Box>
      </PageWrapper>
    );
  }
}

index.propTypes = {};
index.defaultProps = {};

export default index;
