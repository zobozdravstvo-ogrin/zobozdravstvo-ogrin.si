import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import settingsData from '@mapbox/batfish/data/settings-data';
import ImageHeader from '../common/ImageHeader';
import InsertMarkdown from '../common/InsertMarkdown';

class DefaultPageLayout extends Component {
  render() {
    const { frontMatter } = this.props;

    return (
      <Fragment>
        {
          frontMatter.image && (
            <Section pad="none" align="center">
              <ImageHeader alt={frontMatter.title} src={frontMatter.image} />
            </Section>
          )
        }
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'small', vertical: 'medium', between: 'large'}}>
            <Box basis="2/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              {this.props.children}
            </Box>
            <Box basis="1/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              <InsertMarkdown body={settingsData.contact} nlToBr={true} />
            </Box>
          </Box>
        </Section>
      </Fragment>
    );
  }
}

DefaultPageLayout.propTypes = {
  frontMatter: PropTypes.object
};

DefaultPageLayout.defaultProps = {};

export default DefaultPageLayout;
