import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import dayjs from "dayjs"

import PostsLayout from "~/components/Layout/Posts"

const EnglishPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { glob: "**/en/posts/**" } }) {
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
  `)

  const posts = data.allMdx.edges.map(({ node }) => ({
    url: node.fileAbsolutePath
      .match(/(\/en\/posts\/.*)/)[0]
      .replace(".mdx", "/"),
    title: node.frontmatter.title,
    date: node.fileAbsolutePath
      .match(/\d{4}\/\d{2}\/\d{2}/)[0]
      .replaceAll("/", "-"),
  }))

  return (
    <PostsLayout>
      <div>Articles</div>
      <ul>
        {posts.map(({ url, title, date }, i) => (
          <li key={i}>
            <time>{dayjs(date).format("DD MMMM YYYY")}</time>
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </PostsLayout>
  )
}

export default EnglishPage
