import React from 'react';
// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Section from 'grommet/components/Section';
import ImageHeader from '../common/ImageHeader';
import InsertMarkdown from '../common/InsertMarkdown';
import ContentSection from '../common/ContentSection';
import Slideshow from '../common/Slideshow';
import Team from '../common/Team';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
  children: React.ReactNode;
};

const ContactLayout = ({ frontMatter, authors, settings, children }: Props) => {
  const sections = frontMatter.data.section;

  return (
    <>
      {frontMatter.data.image && (
        <Section pad="none" align="center">
          <ImageHeader
            alt={frontMatter.data.title}
            src={frontMatter.data.image}
          />
        </Section>
      )}
      <Section pad="none" align="center">
        {frontMatter.data.slideshow && (
          <Slideshow
            className="slideshow"
            slides={frontMatter.data.slideshow.slide}
          />
        )}
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
              render={(section: any) => {
                return <InsertMarkdown body={section.body} />;
              }}
            />
            <ContentSection
              name="company"
              sections={sections}
              render={(section: any) => {
                return <InsertMarkdown body={section.body} />;
              }}
            />
          </Box>
          <Box basis="1/3" pad={{ horizontal: 'medium', vertical: 'medium' }}>
            <InsertMarkdown body={settings.contact} />
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
          <Team settings={settings} authors={authors} />
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
              render={(section: any) => {
                return <InsertMarkdown body={section.body} />;
              }}
            />
            {children}
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default ContactLayout;
