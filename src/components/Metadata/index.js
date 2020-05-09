import React from "react"
import Head from "next/head"

const Metadata = ({ lang, title }) => (
  <Head>
    <meta charSet="utf-8" />

    <title>
      {title
        ? `${title} | ${process.env.metadata.title}`
        : process.env.metadata.title}
    </title>

    <meta name="description" content={process.env.metadata.description} />
  </Head>
)

Metadata.defaultProps = {
  lang: `en`,
}

export default Metadata
