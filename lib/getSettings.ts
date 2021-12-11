import path from 'path';
import fs from 'fs-jetpack';
import { stringToHtml } from './getContent';

export const getSettings = async (): Promise<any> => {
  const pagesDir = path.join(process.cwd(), 'public');
  const fullPath = path.join(pagesDir, `settings.json`);

  const content = await fs.readAsync(fullPath, 'json');
  const contact = await stringToHtml(content.contact, true);

  return { ...content, contact } || {};
};
