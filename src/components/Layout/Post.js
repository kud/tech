import React from "react"
import { Link } from "gatsby"

const PostLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
  uri,
}) => {
  const splitUri = uri.split("/")
  const homeUrl = `/${splitUri[1]}/${splitUri[2]}/`

  return (
    <div>
      <Link to={homeUrl}>Back to home</Link>
      <h2>{title}</h2>

      <div>{children}</div>
    </div>
  )
}

export default PostLayout
