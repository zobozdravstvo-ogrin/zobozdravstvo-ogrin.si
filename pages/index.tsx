import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import PageMeta from '../components/layout/PageMeta';
import FrontPageLayout from '../components/layout/FrontPageLayout';
import { getPage, stringToHtml, getAuthors } from '../lib/getContent';
import { getSettings } from '../lib/getSettings';
import PageWrapper from '../components/layout/PageWrapper';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
};

const Home: NextPage<Props> = ({ frontMatter, settings, authors }) => {
  return (
    <>
      <PageMeta frontMatter={frontMatter} settings={settings} />
      <PageWrapper settings={settings}>
        <FrontPageLayout
          frontMatter={frontMatter}
          settings={settings}
          authors={authors}
        />
      </PageWrapper>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = await getPage('index');
  const { content, data } = page;
  const { sections, ...rest } = data;

  const contentJsx = await stringToHtml(content, true);

  const pSections = [];
  for (const item of sections.section) {
    const body = await stringToHtml(item.body, true);
    const data = {
      ...item,
      body,
    };
    pSections.push(data);
  }

  const frontMatter = {
    content: contentJsx,
    data: {
      ...rest,
      sections: pSections,
    },
  };

  const authors = await getAuthors();

  const settings = await getSettings();

  return {
    props: {
      frontMatter,
      settings,
      authors,
    },
  };
};
