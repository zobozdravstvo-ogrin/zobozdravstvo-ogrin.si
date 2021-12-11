import { GetServerSidePropsContext } from 'next';
import { getArticles } from '../lib/getContent';

const makeUrlEntry = (rootPart = '') => {
  return `
  <url>
    <loc>${process.env.NEXT_PUBLIC_DOMAIN_HOST}${rootPart}</loc>
  </url>
  `;
};

function generateSiteMap(articles: { id: string; path: string; data: any }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${makeUrlEntry('')}
     ${makeUrlEntry('/storitve')}
     ${makeUrlEntry('/narocanje')}
     ${makeUrlEntry('/ordinacija')}
     ${makeUrlEntry('/kontakt')}
     ${makeUrlEntry('/clanki')}
     ${articles
       .map(({ path }) => {
         return `${makeUrlEntry(path)}
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  //
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const articles = (await getArticles()) as any;
  const sitemap = generateSiteMap(articles);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
