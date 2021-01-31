const path = require("path")
const { merge } = require("webpack-merge")
const images = require("remark-images")
const emoji = require("remark-emoji")
const withPlugins = require("next-compose-plugins")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
  },
})
const withImages = require("next-images")

// @NOTE: translate into es6?
module.exports = withPlugins([withImages, withMDX], {
  env: {
    metadata: {
      title: `Diary of the _kud`,
      description: `Diary of the _kud`,
      author: `@_kud`,
    },
    avatar: {
      url: `https://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0?s=500`,
      mediumUrl: `https://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0?s=1024`,
    },
  },

  pageExtensions: ["md", "mdx", "js"],

  devIndicators: {
    autoPrerender: false,
  },

  webpack: (config) =>
    merge(
      {
        node: {
          fs: "empty",
        },

        resolve: {
          alias: {
            "~": path.resolve(__dirname, "src"),
          },
        },
      },
      config,
    ),
})
