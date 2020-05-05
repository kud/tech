import React from "react"
import dayjs from "dayjs"

import getPosts from "~/lib/get-posts"

import PostsLayout from "~/components/Layout/Posts"

export const getStaticProps = async () => {
  const posts = await getPosts("fr")

  return {
    props: {
      posts,
    },
  }
}

const FrenchPostsPage = ({ posts }) => {
  return <PostsLayout posts={posts} />
}

export default FrenchPostsPage
