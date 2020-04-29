import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import dayjs from "dayjs"
import "dayjs/locale/fr"

import Layout from "./index.js"

const PostsLayout = ({ lang }) => {
  dayjs.locale(lang)

  const data = useStaticQuery(
    graphql(
      `
        query Posts($glob: String) {
          allMdx(filter: { fileAbsolutePath: { glob: $glob } }) {
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
      `,
      { glob: `**/${lang}/posts/**` }
    )
  )

  const posts = data.allMdx.edges.map(({ node }) => ({
    url: node.fileAbsolutePath
      .match(/(\/(fr|en)\/posts\/.*)/)[0]
      .replace(".mdx", "/"),
    title: node.frontmatter.title,
    date: node.fileAbsolutePath
      .match(/\d{4}\/\d{2}\/\d{2}/)[0]
      .replaceAll("/", "-"),
  }))

  return (
    <Layout>
      <div>Articles</div>
      <ul>
        {posts.map(({ url, title, date }, i) => (
          <li key={i}>
            <time>{dayjs(date).format("DD MMMM YYYY")}</time>
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default PostsLayout
