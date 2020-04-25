import React from "react"
import { Global, css } from "@emotion/core"
import normalize from "normalize.css"

import boxSizing from "./box-sizing"
import fonts from "./fonts"
import setRem from "./set-rem"

const styles = css`
  ${normalize}
  ${boxSizing}
  ${setRem}
  ${fonts}
`

export default ({ children }) => (
  <>
    <Global styles={styles} />

    {children}
  </>
)
