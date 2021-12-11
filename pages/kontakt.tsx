import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import PageMeta from '../components/layout/PageMeta';
import ContactLayout from '../components/layout/ContactLayout';
import { getPage, stringToHtml, getAuthors } from '../lib/getContent';
import { getSettings } from '../lib/getSettings';
import PageWrapper from '../components/layout/PageWrapper';
import Image from 'next/image';

type Props = {
  frontMatter: any;
  settings: any;
  authors: any[];
};

const Contact: NextPage<Props> = ({ frontMatter, settings, authors }) => {
  return (
    <>
      <PageMeta frontMatter={frontMatter} settings={settings} />
      <PageWrapper settings={settings}>
        <ContactLayout
          authors={authors}
          frontMatter={frontMatter}
          settings={settings}
        >
          <Image
            src="/images/map.jpg"
            alt="Zemljevid"
            width={1469}
            height={797}
            layout="responsive"
          />
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.openstreetmap.org/?mlat=45.9736&amp;mlon=14.2954#map=15/45.9736/14.2954"
          >
            Zemljevid na novi strani
          </a>
        </ContactLayout>
      </PageWrapper>
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = await getPage('kontakt');
  const { content, data } = page;
  const { section, ...rest } = data;

  const contentJsx = await stringToHtml(content, true);

  const sections = [];
  for (const item of section) {
    const body = await stringToHtml(item.body, true);
    const data = {
      ...item,
      body,
    };
    sections.push(data);
  }

  const frontMatter = {
    content: contentJsx,
    data: {
      ...rest,
      section: sections,
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
