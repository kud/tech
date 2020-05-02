import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { HomeIcon as NativeHomeIcon } from "evergreen-ui"

import Avatar from "~/components/Avatar"

import Footer from "~/components/Footer"

import Layout from "./../index.js"

const Header = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  color: #413f39;
`

const HomeIcon = styled(NativeHomeIcon)`
  fill: #413f39 !important;
`

const Main = styled.main``

const CoverImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center 50%;
  width: 100%;
  height: 100%;
`

const Cover = styled.div`
  height: 30vh;
  overflow: hidden;
  cursor: pointer;

  ${({ fullscreen }) =>
    fullscreen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      height: 100vh;
      padding: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      ${CoverImage} {
        height: auto;
        border: 5px solid #ffffff;
        border-radius: 4px;
        overflow: hidden;
      }
    `}
`

const Wrapper = styled.div`
  max-width: 900px;
  padding: 2rem 2rem;
  margin: auto;
`

const Content = styled.div`
  font-size: 1.8rem;
  line-height: 1.4;
  font-family: Georgia, serif;
  position: relative;
  z-index: 1;

  ${({ cover }) =>
    cover &&
    css`
      margin-top: -70px;
    `}
`

const ContentHeading = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
  margin: 5rem 0;
`

const ContentBody = styled.div``

const PostLayout = ({
  children,
  pageContext: {
    frontmatter: { title, cover },
  },
  uri,
}) => {
  const [coverActive, setCoverActive] = useState(false)

  const handleClickCover = () => setCoverActive(!coverActive)

  const splitUri = uri.split("/")
  const homeUrl = `/${splitUri[1]}/${splitUri[2]}/`

  return (
    <Layout>
      <Header>
        <Link to={homeUrl}>
          <HomeIcon />
        </Link>

        <span>Diary of the _kud</span>
      </Header>

      <Main>
        {cover && (
          <Cover fullscreen={coverActive}>
            <CoverImage src={cover} onClick={handleClickCover} />
          </Cover>
        )}

        <Wrapper>
          <Content cover={cover}>
            <Avatar size={"100px"} />

            <ContentHeading>{title}</ContentHeading>

            <ContentBody>{children}</ContentBody>
          </Content>
        </Wrapper>
      </Main>

      <Wrapper>
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default PostLayout