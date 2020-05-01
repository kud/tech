import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import dayjs from "dayjs"

import PostsLayout from "~/components/Layout/Posts"

const LANG = "en"

const EnglishPostsPage = () => {
  const data = useStaticQuery(
    graphql`
      query EnglishPosts {
        allMdx(filter: { fileAbsolutePath: { glob: "**/*.en.mdx" } }) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  const posts = data.allMdx.edges.map(({ node }) => ({
    url: `/${LANG}/${node.fileAbsolutePath
      .match(/(\/posts\/.*)/)[0]
      .replace("." + LANG + ".mdx", "/")}`,
    title: node.frontmatter.title,
    date: dayjs(
      node.fileAbsolutePath.match(/\d{4}\/\d{2}\/\d{2}/)[0].replaceAll("/", "-")
    ).format("DD MMMM YYYY"),
  }))

  return <PostsLayout posts={posts} />
}

export default EnglishPostsPage
