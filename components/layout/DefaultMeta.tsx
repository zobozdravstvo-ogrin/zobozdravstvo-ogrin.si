import Head from 'next/head';

const DefaultMeta = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="application-name" content="Zobna Ordinacija" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zobna Ordinacija" />
      <meta
        name="description"
        content="Smo zobozdravstvena ordinacija s koncesijo za otroško in mladinsko zobozdravstvo z dolgoletnimi izkušnjami, za odrasle paciente pa nudimo samoplačniške storitve."
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zasebna zobna ordinacija M. Ogrin" />
      <meta
        property="og:description"
        content="Smo zobozdravstvena ordinacija s koncesijo za otroško in mladinsko zobozdravstvo z dolgoletnimi izkušnjami, za odrasle paciente pa nudimo samoplačniške storitve."
      />
      <meta
        property="og:site_name"
        content="Zasebna zobna ordinacija M. Ogrin"
      />
      <meta property="og:url" content="https://zobozdravstvo-ogrin.si" />
      <meta
        property="og:image"
        content="https://zobozdravstvo-ogrin.si/images/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#379bd4"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffbf00" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="all" />
    </Head>
  );
};

export default DefaultMeta;
