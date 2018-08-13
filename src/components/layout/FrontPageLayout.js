import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import InsertMarkdown from '../common/InsertMarkdown';
import InsertContent from '../common/InsertContent';
import Slideshow from '../common/Slideshow';
import ContentSection from '../common/ContentSection';

class FrontPageLayout extends Component {
  render() {
    const { frontMatter, children } = this.props;
    const sections = frontMatter.sections.section;

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
            pad={{ horizontal: 'small', vertical: 'medium', between: 'large' }}
          >
            <Box basis="2/3">
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
              <InsertContent>{children}</InsertContent>
            </Box>
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
