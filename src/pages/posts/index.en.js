import React from "react"
import { graphql } from "gatsby"
import dayjs from "dayjs"

import PostsLayout from "~/components/Layout/Posts"

const LANG = "en"

const EnglishPostsPage = ({ data }) => {
  const posts = data.allMdx.edges.map(({ node }) => ({
    url: `/${LANG}/${node.fileAbsolutePath
      .match(/(\/posts\/.*)/)[0]
      .replace("index." + LANG + ".mdx", "/")}`,
    redirect: node.frontmatter.redirect,
    cover: node.frontmatter.cover,
    title: node.frontmatter.title,
    // date: dayjs(
    //   node.fileAbsolutePath.match(/\d{4}\/\d{2}\/\d{2}/)[0].replaceAll("/", "-")
    // ).format("DD MMMM YYYY"),
    date: "1970-01-01",
  }))

  return <PostsLayout posts={posts} />
}

export default EnglishPostsPage

export const query = graphql`
  query {
    allMdx(
      sort: { fields: fileAbsolutePath, order: DESC }
      filter: { fileAbsolutePath: { regex: "/.en.mdx$/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            redirect
            cover
          }
        }
      }
    }
  }
`
