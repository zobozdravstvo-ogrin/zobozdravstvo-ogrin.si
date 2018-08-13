import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import settingsData from '@mapbox/batfish/data/settings-data';
import ImageHeader from '../common/ImageHeader';
import InsertMarkdown from '../common/InsertMarkdown';
import ContentSection from '../common/ContentSection';
import Slideshow from '../common/Slideshow';
import Team from '../common/Team';

class ContactLayout extends Component {
  render() {
    const { frontMatter } = this.props;
    const sections = frontMatter.section;

    return (
      <Fragment>
        {frontMatter.image && (
          <Section pad="none" align="center">
            <ImageHeader alt={frontMatter.title} src={frontMatter.image} />
          </Section>
        )}
        <Section pad="none" align="center">
          {
            frontMatter.slideshow && (
              <Slideshow
                className="slideshow"
                slides={frontMatter.slideshow.slide}
              />
            )
          }
        </Section>
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{ width: 'xxlarge' }}
            pad={{ horizontal: 'small', vertical: 'small', between: 'large' }}
          >
            <Box
              basis="2/3"
              pad={{ horizontal: 'small', vertical: 'medium' }}
              direction="column"
            >
              <ContentSection
                name="whoweare"
                sections={sections}
                render={section => {
                  return <InsertMarkdown body={section.body} nlToBr={true} />;
                }}
              />
              <ContentSection
                name="company"
                sections={sections}
                render={section => {
                  return <InsertMarkdown body={section.body} nlToBr={true} />;
                }}
              />
            </Box>
            <Box basis="1/3" pad={{ horizontal: 'medium', vertical: 'medium' }}>
              <InsertMarkdown body={settingsData.contact} nlToBr={true} />
            </Box>
          </Box>
        </Section>
        <Section pad="none" align="center" className="team-section">
          <Box
            direction="row"
            justify="start"
            size={{ width: 'xxlarge' }}
            pad={{ horizontal: 'small', vertical: 'none', between: 'large' }}
          >
            <Team />
          </Box>
        </Section>
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{ width: 'xxlarge' }}
            pad={{ horizontal: 'small', vertical: 'small', between: 'large' }}
          >
            <Box
              basis="full"
              pad={{ horizontal: 'small', vertical: 'large' }}
              direction="column"
            >
              <ContentSection
                name="wheretofindus"
                sections={sections}
                render={section => {
                  return <InsertMarkdown body={section.body} nlToBr={true} />;
                }}
              />
              {this.props.children}
            </Box>
          </Box>
        </Section>
      </Fragment>
    );
  }
}

ContactLayout.propTypes = {
  frontMatter: PropTypes.object
};

ContactLayout.defaultProps = {};

export default ContactLayout;
