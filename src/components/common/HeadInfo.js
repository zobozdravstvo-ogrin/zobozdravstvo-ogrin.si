import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';

class HeadInfo extends Component {
  render() {
    return (
      <Section pad="none" align="center">
        <Box
          direction="row"
          justify="center"
          size={{ width: 'xxlarge' }}
          pad={{ horizontal: 'small', vertical: 'medium', between: 'large' }}
        >

        </Box>
      </Section>
    );
  }
}

HeadInfo.propTypes = {};
HeadInfo.defaultProps = {};

export default HeadInfo;
