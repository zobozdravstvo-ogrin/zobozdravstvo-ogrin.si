import Head from 'next/head';

type Props = {
  frontMatter: any;
  settings: any;
};

const PageMeta = ({ frontMatter, settings }: Props) => {
  const title = `${frontMatter?.data?.title || ''} | ${settings?.site_title}`;

  return (
    <Head>
      <title>{title}</title>
      {frontMatter?.data?.description && (
        <meta name="description" content={frontMatter.data.description} />
      )}
      <meta name="apple-mobile-web-app-title" content={settings?.site_title} />
      <meta name="application-name" content={settings?.site_title} />
    </Head>
  );
};

export default PageMeta;
