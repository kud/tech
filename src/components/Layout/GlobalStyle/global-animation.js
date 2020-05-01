import { css, keyframes } from "@emotion/core"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export default css`
  html {
    animation: ${fadeIn} 300ms ease;
  }
`
