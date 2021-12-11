import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import PageMeta from '../../components/layout/PageMeta';
import ArticleLayout from '../../components/layout/ArticleLayout';
import {
  getArticle,
  getArticles,
  stringToHtml,
  getAuthors,
} from '../../lib/getContent';
import { getSettings } from '../../lib/getSettings';
import PageWrapper from '../../components/layout/PageWrapper';
import InsertMarkdown from '../../components/common/InsertMarkdown';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
};

const Article: NextPage<Props> = ({ frontMatter, settings, authors }) => {
  return (
    <>
      <PageMeta frontMatter={frontMatter} settings={settings} />
      <PageWrapper settings={settings}>
        <ArticleLayout
          frontMatter={frontMatter}
          settings={settings}
          authors={authors}
        >
          <InsertMarkdown body={frontMatter.content} />
        </ArticleLayout>
      </PageWrapper>
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
  const articles = await getArticles();
  const paths = articles.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = (params?.id || '') as string;

  const article = await getArticle(id);
  const { content, data } = article;

  const contentJsx = await stringToHtml(content, true);

  const frontMatter = {
    content: contentJsx,
    data: {
      ...data,
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
