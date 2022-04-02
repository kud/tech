import React from "react"
import Head from "next/head"

import getAvatarUrl from "lib/get-avatar-url"

const Metadata = ({ title, cover, description }) => {
  const _title = title
    ? `${title} | ${process.env.metadata.title}`
    : process.env.metadata.title

  const _cover = cover ? cover : getAvatarUrl(1024)

  const _description = description
    ? description
    : process.env.metadata.description

  const _author = process.env.metadata.author

  return (
    <Head>
      <meta charSet="utf-8" />

      <title>{_title}</title>

      <link rel="shortcut icon" type="image/png" href="/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={_title} />
      <meta property="og:url" content="http://diary.kud.io" />
      <meta property="og:description" content={_description} />
      <meta property="og:image" content={_cover} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:site" content={_author} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={_cover} />

      <meta name="description" content={_description} />
    </Head>
  )
}

Metadata.defaultProps = {
  lang: "en",
}

export default Metadata
