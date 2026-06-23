module.exports = function (eleventyConfig) {
  // Static assets (images, favicons) → /assets/*
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Tailwind compiles src/input.css → dist/styles.css separately (npm build),
  // so Eleventy must not try to process it.
  eleventyConfig.ignores.add("src/input.css");

  // Content hub: every Markdown file under src/resources/ is a guide.
  eleventyConfig.addCollection("guides", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/resources/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
