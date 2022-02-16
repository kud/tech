import React from "react"
import Head from "next/head"

// Global styles must be necessarily here: https://github.com/zeit/next.js/blob/master/errors/css-global.md
import "normalize.css"
import "hint.css"

// @TODO: probably use Emotion instead
import "styles/box-sizing.css"
import "styles/fonts.css"
import "styles/define-rem.css"
import "styles/selection.css"
import "styles/global-animation.css"
import "styles/base.css"

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
