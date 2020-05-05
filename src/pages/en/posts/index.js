import React from "react"
import dayjs from "dayjs"

import getPosts from "~/lib/get-posts"

import PostsLayout from "~/components/Layout/Posts"

export const getStaticProps = async () => {
  const posts = await getPosts("en")

  return {
    props: {
      posts,
    },
  }
}

const EnglishPostsPage = ({ posts }) => {
  return <PostsLayout posts={posts} />
}

export default EnglishPostsPage
