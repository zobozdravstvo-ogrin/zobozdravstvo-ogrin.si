import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import PageMeta from '../components/layout/PageMeta';
import PageLayout from '../components/layout/PageLayout';
import { getPage, stringToHtml, getAuthors } from '../lib/getContent';
import { getSettings } from '../lib/getSettings';
import PageWrapper from '../components/layout/PageWrapper';
import InsertMarkdown from '../components/common/InsertMarkdown';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
};

const Services: NextPage<Props> = ({ frontMatter, settings }) => {
  return (
    <>
      <PageMeta frontMatter={frontMatter} settings={settings} />
      <PageWrapper settings={settings}>
        <PageLayout frontMatter={frontMatter} settings={settings}>
          <InsertMarkdown body={frontMatter.content} />
        </PageLayout>
      </PageWrapper>
    </>
  );
};

export default Services;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = await getPage('storitve');
  const { content, data } = page;
  const { section, ...rest } = data;

  const contentJsx = await stringToHtml(content, true);

  const frontMatter = {
    content: contentJsx,
    data: {
      ...rest,
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
