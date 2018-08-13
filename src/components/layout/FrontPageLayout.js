import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import InsertMarkdown from '../common/InsertMarkdown';
import InsertContent from '../common/InsertContent';
import Slideshow from '../common/Slideshow';
import ContentSection from '../common/ContentSection';
import GalleryDisplay from '../common/GalleryDisplay';
import Team from '../common/Team';

class FrontPageLayout extends Component {
  render() {
    const { frontMatter, children } = this.props;
    const sections = frontMatter.sections.section;
    const photos = frontMatter.gallery;

    return (
      <Fragment>
        <ContentSection
          name="infoheader"
          sections={sections}
          render={section => {
            return (
              <Section pad="medium" align="center" className="info-header">
                <h2>{section.title}</h2>
                <InsertMarkdown body={section.body} />
              </Section>
            );
          }}
        />
        <Section pad="none" align="center">
          <Slideshow
            className="slideshow"
            slides={frontMatter.frontslideshow.slide}
          />
        </Section>
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{ width: 'xxlarge' }}
            pad={{ horizontal: 'small', vertical: 'large', between: 'small' }}
          >
            <Box basis="2/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              <GalleryDisplay photos={photos} />
            </Box>
            <Box basis="1/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
              <ContentSection
                name="ordinacija"
                sections={sections}
                render={section => {
                  return (
                    <Fragment>
                      <h1>{section.title}</h1>
                      <InsertMarkdown body={section.body} />
                    </Fragment>
                  );
                }}
              />
            </Box>
          </Box>
          <InsertContent>{children}</InsertContent>
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
      </Fragment>
    );
  }
}

FrontPageLayout.propTypes = {
  frontMatter: PropTypes.object
};
FrontPageLayout.defaultProps = {};

export default FrontPageLayout;
