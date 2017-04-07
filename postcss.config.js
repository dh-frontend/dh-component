/**
 *
 * @author keyy/jimberton.wang@gmail.com 17/4/6 10:30
 * @description
 */
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 5 versions']
    })
  ]
};