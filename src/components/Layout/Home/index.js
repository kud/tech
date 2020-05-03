import React from "react"

import Metadata from "~/components/Metadata"

import Layout from "./../index.js"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Metadata title={"Home"} />

      <Layout>{children}</Layout>
    </>
  )
}

export default HomeLayout
