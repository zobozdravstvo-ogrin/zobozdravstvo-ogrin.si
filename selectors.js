const pageSettingsData = require('./pages/settings');

const settingsData = () => {
  return pageSettingsData;
};

const authors = data => {
  return data.pages.filter(pagesData => /\/author\//.test(pagesData.path));
};

module.exports = {
  settingsData,
  authors
};
