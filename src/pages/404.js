import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const rainbow = keyframes`
  0% {
    background-position: 0% 82%;
  }

  50% {
    background-position: 100% 19%;
  }

  100% {
    background-position: 0% 82%;
  }
`

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;
  animation: ${rainbow} 18s ease infinite;
`

const Link = styled.a`
  text-decoration: none;
  display: block;
  padding: 5rem;
  font-size: 10rem;
  transition: transform 300ms ease;

  &:hover {
    transform: rotate(720deg);
  }
`

const NotFoundPage = () => (
  <Root>
    <Link href="/">{"😬"}</Link>
  </Root>
)

export default NotFoundPage
