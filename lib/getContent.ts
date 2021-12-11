import path from 'path';
import fs from 'fs-jetpack';
import matter from 'gray-matter';
const jsxM = require('@mapbox/jsxtreme-markdown');
const presets = require('remark-preset-davidtheclark');

export const stringToHtml = async (content?: string, nlToBr = false) => {
  let bodyHtml = content || '';
  if (content) {
    bodyHtml = jsxM.toJsx(content, {
      remarkPlugins: presets.plugins,
    });
  }

  if (nlToBr) {
    bodyHtml = bodyHtml.replace(/\\n/g, '<br />');
  }
  return bodyHtml;
};

export const getPages = async () => {
  const pagesDir = path.join(process.cwd(), 'public');
  const listDir = await fs.listAsync(pagesDir);
  const listMd = listDir?.filter((item) => item.includes('.md')) || [];

  const data: { id: string; frontMatter: matter.GrayMatterFile<string> }[] = [];
  for (const fileName of listMd) {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(pagesDir, fileName);
    const contentStr = await fs.readAsync(fullPath, 'utf8');

    if (!contentStr) continue;

    const frontMatter = matter(contentStr);
    data.push({ id, frontMatter });
  }

  return data;
};

export const getAuthors = async () => {
  const pagesDir = path.join(process.cwd(), 'public', 'author');
  const listDir = await fs.listAsync(pagesDir);
  const listMd = listDir?.filter((item) => item.includes('.md')) || [];

  const data: { id: string; frontMatter: matter.GrayMatterFile<string> }[] = [];
  for (const fileName of listMd) {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(pagesDir, fileName);
    const contentStr = await fs.readAsync(fullPath, 'utf8');

    if (!contentStr) continue;

    const { orig, ...rest } = matter(contentStr);
    // @ts-ignore orig
    data.push({ id, frontMatter: rest });
  }

  return data;
};

export const getArticles = async () => {
  const pagesDir = path.join(process.cwd(), 'public', 'clanki');
  const listDir = await fs.listAsync(pagesDir);
  const listMd = listDir?.filter((item) => item.includes('.md')) || [];

  const data: { id: string; frontMatter: matter.GrayMatterFile<string> }[] = [];
  for (const fileName of listMd) {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(pagesDir, fileName);
    const contentStr = await fs.readAsync(fullPath, 'utf8');

    if (!contentStr) continue;

    const { orig, ...frontMatter } = matter(contentStr);
    const articlePath = `/clanki/${id}`;
    // @ts-ignore
    data.push({ id, path: articlePath, frontMatter });
  }

  return data;
};

export const getArticle = async (id: string) => {
  const pagesDir = path.join(process.cwd(), 'public', 'clanki');
  const fullPath = path.join(pagesDir, `${id}.md`);
  const contentStr = await fs.readAsync(fullPath, 'utf8');
  if (!contentStr) throw new Error('No file data');

  const frontMatter = matter(contentStr);
  return frontMatter;
};

export const getPage = async (id: string) => {
  const pagesDir = path.join(process.cwd(), 'public');
  const fullPath = path.join(pagesDir, `${id}.md`);
  const contentStr = await fs.readAsync(fullPath, 'utf8');
  if (!contentStr) throw new Error('No file data');

  const frontMatter = matter(contentStr);
  return frontMatter;
};

export const getSettings = async () => {
  const contentDir = path.join(__dirname, 'public');
  const fullPath = path.join(contentDir, `settings.json`);
  const content = await fs.readAsync(fullPath, 'json');
  return content;
};
