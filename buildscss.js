const path = require('path');
const sass = require('node-sass');
const packageImporter = require('node-sass-package-importer');
const jetpack = require('fs-jetpack');

const options = {
  cwd: process.cwd(),
  packageKeys: ['sass', 'scss', 'style', 'css', 'settings.defaults.'],
  packagePrefix: '~'
};

sass.render(
  {
    file: path.join(__dirname, './src/styles/style.scss'),
    importer: packageImporter(options),
    includePaths: [path.resolve(process.cwd(), './node_modules')],
    outputStyle: 'compressed',
    sourceComments: false,
    omitSourceMapUrl: true
  },
  (error, results) => {
    if (error) {
      /* eslint-disable */
      console.log(error.status);
      console.log(error.column);
      console.log(error.message);
      console.log(error.line);
      /* eslint-enable */
    }

    jetpack.write(
      path.join(__dirname, './src/styles/scsstocss.css'),
      results.css.toString()
    );
  }
);
