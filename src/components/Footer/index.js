import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

import getLangFromPathname from "~/lib/get-lang-from-pathname"

import NativeLink from "~/components/Link"

const Root = styled.footer`
  margin: 0;
  text-align: center;
  border-top: 1px solid #eee;
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

const Link = styled(NativeLink)`
  color: #8f8f8f;
`

const Footer = () => {
  const { pathname } = useRouter()

  const LANG = getLangFromPathname(pathname)

  const linkList = [
    {
      url: "http://kud.io",
      title: "La Maison",
    },
    {
      url: "http://instagram.kud.io",
      title: "Le Instagram",
    },
    {
      url: "http://twitter.kud.io",
      title: "Le Twitter",
    },
  ]

  const switchLink = {
    url: LANG === "fr" ? "/en/posts" : "/fr/posts",
    title: LANG === "fr" ? "I speak English" : "Je parle le français",
  }

  const handleClickSwitch = () => {
    localStorage.setItem("favourite-language", LANG === "fr" ? "en" : "fr")
  }

  return (
    <Root>
      <List>
        {linkList.map(({ url, title }) => (
          <ListItem key={url}>
            <Link to={url} forceNoIcon>
              {title}
            </Link>
          </ListItem>
        ))}

        <ListItem>
          <Link to={switchLink.url} forceNoIcon onClick={handleClickSwitch}>
            {switchLink.title}
          </Link>
        </ListItem>
      </List>
    </Root>
  )
}

export default Footer
