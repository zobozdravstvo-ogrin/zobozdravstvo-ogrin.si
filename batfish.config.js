const path = require('path');
const dataSelectors = require('./selectors');

const webpackLoaders = [];
const webpackPlugins = [];
const stylesheets = [];

if (process.env.NODE_ENV === 'production') {
  stylesheets.push(path.join(__dirname, './src/styles/scsstocss.css'));
}

if (process.env.NODE_ENV !== 'production') {
  const styleLoader = {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'sass-loader?sourceMap&outputStyle=expanded&' +
        'includePaths[]=' +
        encodeURIComponent(path.resolve(process.cwd(), './node_modules'))
    ]
  };
  webpackLoaders.push(styleLoader);
}

module.exports = () => {
  return {
    siteOrigin: 'https://zobozdravstvo-ogrin.si',
    pagesDirectory: path.join(__dirname, './pages'),
    dataSelectors,
    stylesheets,
    applicationWrapperPath: path.join(
      __dirname,
      './src/components/layout/AppWrapper.js'
    ),
    jsxtremeMarkdownOptions: {
      getWrapper: resource => {
        if (/\/404.md/.test(resource)) {
          return path.join(__dirname, './src/components/layout/404Wrapper.js');
        }

        return path.join(
          __dirname,
          './src/components/layout/MarkdownWrapper.js'
        );
      }
    },
    webpackLoaders,
    webpackPlugins,
    babelPlugins: [],
    fileLoaderExtensions: [
      'jpeg',
      'jpg',
      'png',
      'gif',
      'webp',
      'mp4',
      'webm',
      'woff',
      'woff2',
      'svg',
      'ttf'
    ]
  };
};
