// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Section from 'grommet/components/Section';
import ImageHeader from '../common/ImageHeader';
import InsertMarkdown from '../common/InsertMarkdown';

type Props = {
  frontMatter: any;
  settings: any;
  children: React.ReactNode;
};

const PageLayout = ({ frontMatter, settings, children }: Props) => {
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
        <Box
          direction="row"
          justify="start"
          size={{ width: 'xxlarge' }}
          pad={{ horizontal: 'small', vertical: 'medium', between: 'large' }}
        >
          <Box basis="2/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
            {children}
          </Box>
          <Box basis="1/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
            <InsertMarkdown body={settings.contact} />
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default PageLayout;
