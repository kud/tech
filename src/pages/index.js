import React from "react"
import Head from "next/head"
import styled from "@emotion/styled"

import Redirect from "~/components/Redirect"
import Avatar from "~/components/Avatar"
import HomeLayout from "~/components/Layout/Home"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
`

const AvatarBox = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 4rem;
`

const EntryLink = styled.a`
  display: inline-block;
  padding: 15px 20px;
  margin: 0 20px;
  color: #333;
  font-size: 3rem;
  border-bottom: 2px dotted transparent;
  transition: border 300ms ease;
  text-decoration: none;
  font-family: "Libre Baskerville", serif;

  &:hover {
    border-bottom-color: #333;
  }
`

const IndexPage = () => {
  const handleClickFrench = () => {
    setLang("fr")
  }

  const handleClickEnglish = () => {
    setLang("en")
  }

  const setLang = (lang) => {
    localStorage.setItem("favourite-language", lang)
  }

  if (process.browser) {
    const favouriteLanguage = localStorage.getItem("favourite-language")

    if (favouriteLanguage) {
      window.location.href = `/${favouriteLanguage}/posts`

      return <span />
    }
  }

  return (
    <HomeLayout>
      <Wrapper>
        <Container>
          <AvatarBox>
            <Avatar />
          </AvatarBox>

          <EntryLink href="/fr/posts" onClick={handleClickFrench}>
            {"fr_FR"}
          </EntryLink>

          <EntryLink href="/en/posts" onClick={handleClickEnglish}>
            {"en_UK"}
          </EntryLink>
        </Container>
      </Wrapper>
    </HomeLayout>
  )
}

export default IndexPage
