import React from "react"
import styled from "@emotion/styled"
import Image from "next/image"

import getAvatarUrl from "lib/get-avatar-url"

const Root = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
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
  const intSize = parseInt(size)
  const imgSize = !isNaN(intSize) ? intSize * 2.5 : 500

  return (
    <Root size={size}>
      <a href="https://kud.io">
        <Image
          src={getAvatarUrl(imgSize)}
          alt=""
          width={imgSize}
          height={imgSize}
        />
      </a>
    </Root>
  )
}

export default Avatar
