import React from "react"
import { Link as NativeLink } from "gatsby"
import styled from "@emotion/styled"
import { ArrowTopRightIcon } from "evergreen-ui"

const BaseLink = styled(NativeLink)`
  color: #2a86c8;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:active {
    text-decoration: underline;
  }

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

const ExternalLink = styled(BaseLink.withComponent("a"))`
  text-decoration: none;
`

ExternalLink.Icon = styled(ArrowTopRightIcon)`
  margin-right: 1rem;
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
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  )
}

export default Link
