import React from "react"

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

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
