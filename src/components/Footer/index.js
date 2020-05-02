import React from "react"
import styled from "@emotion/styled"

const Root = styled.footer`
  margin: 6rem 0;
  text-align: center;
  border-top: 1px solid #eee;
`

const List = styled.ul``

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
`

const Link = styled.a``

const Footer = () => {
  const linkList = [
    {
      url: "http://kud.io",
      title: "La Maison",
      external: true,
    },
    {
      url: "http://instagram.kud.io",
      title: "Le Instagram",
      external: true,
    },
    {
      url: "http://twitter.kud.io",
      title: "Le Twitter",
      external: true,
    },
    {
      url: "/en/posts/",
      title: "I speak English",
    },
  ]

  return (
    <Root>
      <List>
        {linkList.map(({ url, title, external }) => (
          <ListItem key={url}>
            <Link href={url} target={external ? "_blank" : "_self"}>
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Root>
  )
}

export default Footer
