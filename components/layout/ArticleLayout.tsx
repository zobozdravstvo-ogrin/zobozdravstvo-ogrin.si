// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Section from 'grommet/components/Section';
import ImageHeader from '../common/ImageHeader';
import TeamCard from '../common/TeamCard';
import GalleryDisplay from '../common/GalleryDisplay';
import format from 'date-fns/format';

type Props = {
  frontMatter: any;
  settings: any;
  children: React.ReactNode;
  authors: any[];
};

const ArticleLayout = ({ frontMatter, settings, authors, children }: Props) => {
  const photos = frontMatter.data.gallery;

  const teamMember = authors.find((item) => {
    const author = item.frontMatter.data;
    return frontMatter.data.author === author.title;
  });

  const person = teamMember.frontMatter.data;

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
            <h2>{frontMatter.data.title}</h2>
            <h3>{frontMatter.data.sub_title}</h3>
            <h4>{format(new Date(frontMatter.data.date), 'dd.MM.yyyy')}</h4>
            <div className="body-container">{children}</div>
            <GalleryDisplay photos={photos} />
          </Box>
          <Box basis="1/3" pad={{ horizontal: 'small', vertical: 'medium' }}>
            <TeamCard
              key={person.title}
              pad={{ horizontal: 'none', vertical: 'medium' }}
              heading={person.title}
              description={person.description}
              thumbnail={person.author_image}
              basis="1/3"
            />
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default ArticleLayout;
