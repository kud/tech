import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Global from "~/components/Layout/Global"

const FrenchPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { glob: "**/fr/posts/**" } }) {
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
      .match(/(\/fr\/posts\/.*)/)[0]
      .replace(".mdx", "/"),
    title: node.frontmatter.title,
  }))

  return (
    <Global>
      <ul>
        {posts.map(({ url, title }, i) => (
          <li key={i}>
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </Global>
  )
}

export default FrenchPage
