import Head from 'next/head';
import type { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { getArticles } from '../../lib/getContent';
import PageWrapper from '../../components/layout/PageWrapper';
import { getSettings } from '../../lib/getSettings';
import ArticleCard from '../../components/common/ArticleCard';
// @ts-ignore
import Box from 'grommet/components/Box';
// @ts-ignore
import Section from 'grommet/components/Section';

type Props = {
  settings: any;
  articles: any[];
};

const Articles: NextPage<Props> = ({ settings, articles }) => {
  const title = 'Članki';
  const description = 'Seznam člankov';

  const articlesEl = articles
    .filter((item) => {
      return item.frontMatter.data.published;
    })
    .sort((a, b) => {
      const aval = new Date(a.frontMatter.data.date).getTime();
      const bval = new Date(b.frontMatter.data.date).getTime();
      return bval - aval;
    })
    .map((article) => {
      if (!article.frontMatter.data.author) {
        return null;
      }

      const content = article.frontMatter.data;

      return (
        <ArticleCard
          key={content.title}
          pad={{ horizontal: 'none' }}
          heading={content.title}
          description={content.sub_title}
          thumbnail={content.image}
          author={content.author}
          date={content.date}
          link={article.path}
          basis="1/3"
        />
      );
    });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <PageWrapper settings={settings}>
        <Section pad="none" align="center">
          <Box
            direction="row"
            justify="start"
            size={{ width: 'xxlarge' }}
            pad={{
              horizontal: 'small',
              vertical: 'medium',
              between: 'large',
            }}
          >
            <Box pad="none" direction="column">
              <h2>{title}</h2>
              <Box
                direction="row"
                basis="full"
                justify="start"
                pad="none"
                responsive={true}
              >
                {articlesEl}
              </Box>
            </Box>
          </Box>
        </Section>
      </PageWrapper>
    </>
  );
};

export default Articles;

export const getStaticProps: GetStaticProps = async (params) => {
  const articles = await getArticles();
  const settings = await getSettings();
  return {
    props: {
      articles,
      settings,
    },
  };
};
