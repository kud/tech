import React from "react"
import { Link } from "gatsby"

import Layout from "./index.js"
import Footer from "./Footer"

const PostsLayout = ({ posts }) => {
  return (
    <Layout>
      <main>
        <div>Articles</div>
        <ul>
          {posts.map(({ url, title, date }, i) => (
            <li key={i}>
              <time>{date}</time>
              <Link to={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostsLayout
