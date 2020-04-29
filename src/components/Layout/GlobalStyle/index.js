import React from "react"
import { Global, css, keyframes } from "@emotion/core"
import normalize from "normalize.css"

import boxSizing from "./box-sizing"
import fonts from "./fonts"
import setRem from "./set-rem"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const styles = css`
  ${normalize}
  ${boxSizing}
  ${setRem}
  ${fonts}

  html {
    animation: ${fadeIn} 300ms ease;
  }
`

export default () => <Global styles={styles} />
