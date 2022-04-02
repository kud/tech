import { Html, Head, Main, NextScript } from "next/document"

const googleFontsHref = [
  "https://fonts.googleapis.com/css2",
  [
    "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400",
    "family=Roboto:wght@100;300;400;500;700",
    "family=Roboto+Mono",
    "family=Nanum+Pen+Script",
    "display=swap",
  ].join("&"),
].join("?")

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href={googleFontsHref} rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
