import React from "react"
import { Global, css } from "@emotion/core"
import normalize from "normalize.css"

import boxSizing from "./box-sizing"
import fonts from "./fonts"
import setRem from "./set-rem"
import globalAnimation from "./global-animation"
import base from "./base"

const styles = css`
  ${normalize}
  ${boxSizing}
  ${setRem}
  ${fonts}
  ${globalAnimation}
  ${base}
`

export default () => <Global styles={styles} />
