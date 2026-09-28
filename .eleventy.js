const CATEGORIES = ["Poetry", "Food", "Travel", "Essays", "Books", "Film"];

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  // One collection per category, newest first.
  CATEGORIES.forEach(function (cat) {
    eleventyConfig.addCollection(cat.toLowerCase(), function (collectionApi) {
      return collectionApi
        .getFilteredByGlob("posts/*.md")
        .filter(function (item) {
          return item.data.category === cat;
        })
        .sort(function (a, b) {
          return b.date - a.date;
        });
    });
  });

  // All posts, newest first, for the homepage "Recently hopped over" + archive.
  eleventyConfig.addCollection("allPosts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").sort(function (a, b) {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("categorySlug", function (cat) {
    return String(cat).toLowerCase();
  });

  eleventyConfig.addFilter("niceDate", function (date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("monthAbbr", function (date) {
    return new Date(date)
      .toLocaleDateString("en-GB", { month: "short" })
      .toUpperCase()
      .slice(0, 3);
  });

  eleventyConfig.addFilter("dayNum", function (date) {
    return new Date(date).toLocaleDateString("en-GB", { day: "2-digit" });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
