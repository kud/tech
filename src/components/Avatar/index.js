import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  width: ${({ volume }) => volume};
  height: ${({ volume }) => volume};
  display: block;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: transform 150ms ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`

const Avatar = ({ size = "200px" }) => {
  return (
    <Root volume={size}>
      <a href="http://kud.io">
        <img src={process.env.avatar.url} alt="" />
      </a>
    </Root>
  )
}

export default Avatar
