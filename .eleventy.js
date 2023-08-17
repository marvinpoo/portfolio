const i18n = require('eleventy-plugin-i18n');
const translations = require('./content/_data/i18n');
const charts = require('chart.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      'de': 'en',
      'bln': 'de'
    }
  });
  return {
    dir: {
      input: "./content",
      output: "./public",
      includes: "_includes",
      layouts: "_layouts",
      includes: "_parts",
      data: "_data"
    }
  };
};