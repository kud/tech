import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import dayjs from "dayjs"
import "dayjs/locale/fr"

import PostsLayout from "~/components/Layout/Posts"

const LANG = "fr"

dayjs.locale(LANG)

const FrenchPostsPage = () => {
  const data = useStaticQuery(
    graphql`
      query FrenchPosts {
        allMdx(filter: { fileAbsolutePath: { glob: "**/*.fr.mdx" } }) {
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
      .replace("index." + LANG + ".mdx", "/")}`,
    title: node.frontmatter.title,
    date: dayjs(
      node.fileAbsolutePath.match(/\d{4}\/\d{2}\/\d{2}/)[0].replaceAll("/", "-")
    ).format("DD MMMM YYYY"),
  }))

  return <PostsLayout posts={posts} />
}

export default FrenchPostsPage
