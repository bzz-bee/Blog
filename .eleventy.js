module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./styles/");
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addWatchTarget("./_includes/");
  return {
    dir: {
      input: "pages",
      output: "_site",
      includes: "_includes",
      layouts: "posts"
    },
  };
};