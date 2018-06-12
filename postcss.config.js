const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
    })
  ]
};
