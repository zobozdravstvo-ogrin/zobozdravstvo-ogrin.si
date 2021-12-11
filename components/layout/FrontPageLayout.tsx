// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Section from 'grommet/components/Section';
import InsertMarkdown from '../common/InsertMarkdown';
import Slideshow from '../common/Slideshow';
import ContentSection from '../common/ContentSection';
import GalleryDisplay from '../common/GalleryDisplay';
import Team from '../common/Team';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
};

const FrontPageLayout = ({ frontMatter, settings, authors }: Props) => {
  const sections = frontMatter.data.sections;
  const photos = frontMatter.data.gallery;

  return (
    <>
      <ContentSection
        name="infoheader"
        sections={sections}
        render={(section: any) => {
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
          slides={frontMatter.data.frontslideshow.slide}
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
              render={(section: any) => {
                return (
                  <>
                    <h1>{section.title}</h1>
                    <InsertMarkdown body={section.body} />
                  </>
                );
              }}
            />
          </Box>
        </Box>
        {/* {children} */}
      </Section>
      <Section pad="none" align="center" className="team-section">
        <Box
          direction="row"
          justify="start"
          size={{ width: 'xxlarge' }}
          pad={{ horizontal: 'small', vertical: 'none', between: 'large' }}
        >
          <Team authors={authors} settings={settings} />
        </Box>
      </Section>
    </>
  );
};

export default FrontPageLayout;
