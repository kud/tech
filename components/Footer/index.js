import React from "react"
import styled from "@emotion/styled"

import NativeLink from "components/Link"

const Link = styled(NativeLink)`
  color: #8f8f8f;
`

const List = styled.ul`
  margin: 0;
  padding: 1rem;
`

const ListItem = styled.li`
  display: inline-block;
  padding: 20px;
  padding-right: 0;

  &:before {
    content: "•";
    display: inline-block;
    margin-right: 20px;
    color: #8f8f8f;
  }

  &:first-of-type:before {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 10px;
    display: block;

    &:before {
      display: none;
    }
  }
`

const Root = styled.footer`
  margin: 0;
  text-align: center;
  border-top: 1px solid #eee;
`

const linkList = process.env.footer

const Footer = () => (
  <Root>
    <List>
      {linkList.map(({ url, title }) => (
        <ListItem key={url}>
          <Link to={url} forceNoIcon>
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  </Root>
)

export default Footer
