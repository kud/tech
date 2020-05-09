import React from "react"
import Head from "next/head"

const Metadata = ({ lang, title, cover, description }) => {
  const _title = title
    ? `${title} | ${process.env.metadata.title}`
    : process.env.metadata.title

  const _cover = cover ? cover : process.env.avatar.mediumUrl

  const _description = description
    ? description
    : process.env.metadata.description

  const _author = process.env.metadata.author

  return (
    <Head>
      <meta charSet="utf-8" />

      <title>{_title}</title>

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
  lang: `en`,
}

export default Metadata
