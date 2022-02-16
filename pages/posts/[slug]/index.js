import React from "react"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

import getPosts from "lib/get-posts"
import getPost from "lib/get-post"

import components from "components/MDX/components"
import PostLayout from "components/Layout/Post"

export const getStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const pageId = slug.split("--").slice(-1)

  const { meta, mdContent } = await getPost(pageId)

  const mdxContent = await serialize(mdContent)

  return {
    props: { meta, children: mdxContent },
    revalidate: 1,
  }
}

const PostPage = ({ meta, children }) => {
  return (
    <PostLayout meta={meta}>
      <MDXRemote {...children} components={components} />
    </PostLayout>
  )
}

export default PostPage
