import React from "react"

import getPosts from "lib/get-posts"

import PostsLayout from "components/Layout/Posts"

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}

const PostsPage = ({ posts }) => {
  return <PostsLayout posts={posts} />
}

export default PostsPage
