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
          "~": path.resolve(__dirname, "src/"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/Post.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
