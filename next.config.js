const withPlugins = require("next-compose-plugins")

module.exports = withPlugins([], {
  experimental: {
    emotion: {},
  },

  env: {
    metadata: {
      title: `_kud's tech blog`,
      description: `_kud's tech blog`,
      author: `@_kud`,
    },
    avatar: {
      url: `https://www.gravatar.com/avatar/e6eaeaa6da69e804c27c2d4cd55107e0`,
    },
  },

  images: {
    domains: ["www.gravatar.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ]
  },
})
