import React from "react"
import styled from "@emotion/styled"
import { FaLink } from "react-icons/fa"

const BaseLink = styled.a`
  color: #333;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:active {
    text-decoration: underline;
  }

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

const ExternalLink = styled(BaseLink)`
  text-decoration: none;
`

ExternalLink.Icon = styled(FaLink)`
  margin-right: 1rem;
  font-size: 1rem;
`

const InternalLink = styled(BaseLink)``

const Link = ({ to, children, forceNoIcon, ...rest }) => {
  const isExternal = to.startsWith("http") || to.startsWith("mailto")

  if (isExternal) {
    return (
      <ExternalLink
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {!forceNoIcon && <ExternalLink.Icon />}
        {children}
      </ExternalLink>
    )
  }

  return (
    <InternalLink href={to} {...rest}>
      {children}
    </InternalLink>
  )
}

export default Link
