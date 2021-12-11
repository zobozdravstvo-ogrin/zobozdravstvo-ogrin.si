import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// @ts-ignore
import Box from 'grommet/components/Box';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';
import { getSettings } from '../lib/getSettings';

type Props = {
  frontMatter: any;
  settings: any;
};

const Contact: NextPage<Props> = ({ settings }) => {
  return (
    <>
      <Head>
        <title>Stran ne obstaja</title>
        <meta name="description" content="Neznana lokacija" />
      </Head>

      <Box full={true}>
        <AppHeader settings={settings} />
        <Box full={true} justify="center" align="center" pad="none">
          <h1>404 Stran ne obstaja</h1>

          <Link href="/">
            <a>Nazaj na prvo stran</a>
          </Link>
        </Box>
        <AppFooter settings={settings} />
      </Box>
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const settings = await getSettings();
  return {
    props: {
      settings,
    },
  };
};
