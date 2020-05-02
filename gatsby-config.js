const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Diary of the _kud`,
    description: `Diary of the _kud`,
    author: `@_kud`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~": path.resolve(__dirname, "src"),
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve(__dirname, "src/components/Layout/Post"), // @NOTE: how to change default property here?
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          `gatsby-remark-static-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src/images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve(__dirname, "src/pages"),
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Muli"],
        },
      },
    },
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [`m@kud.io`],
        query: `?size=240&m=dp`,
      },
    },
    `gatsby-plugin-no-javascript`,
  ],
}
