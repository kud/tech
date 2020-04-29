/**
 * more info there: https://developer.mozilla.org/en/docs/Web/CSS/box-sizing
 */
import { css } from "@emotion/core"

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`
