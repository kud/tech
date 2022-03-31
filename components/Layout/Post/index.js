import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FaHome } from "react-icons/fa"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

import getReadingTime from "lib/get-reading-time"

import Metadata from "components/Metadata"
import Avatar from "components/Avatar"
import Footer from "components/Footer"

import Layout from "../index.js"

const Link = styled.a``

const Header = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  color: #413f39;
  position: sticky;
  top: 0;
  z-index: 2;

  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 8px;
`

const Name = styled.span`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2.2rem;
  margin-top: -0.5rem;
  margin-bottom: -1rem;
`

const HomeIcon = styled(FaHome)`
  margin-bottom: -2px;
  fill: #413f39 !important;
  transition: fill 150ms ease;

  &:hover {
    fill: #8f8f8f !important;
  }
`

const Main = styled.main``

const CoverImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center ${({ coverPosition }) => `${coverPosition}%`};
  width: 100%;
  height: 100%;
`

const Cover = styled.div`
  height: 30vh;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  background: #efefef;

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
      z-index: 100;

      ${CoverImage} {
        height: 100%;
        width: auto;
        border-radius: 6px;
        overflow: hidden;
        background-color: #fff;
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
  font-size: 4rem;
  margin: 5rem 0 1rem 0;
  font-family: "Libre Baskerville", serif;
`

const ContentDescription = styled.div`
  margin-top: 0rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-family: "Libre Baskerville", serif;
`

const ContentMeta = styled.time`
  color: #869d9e;
  font-size: 1.6rem;
  display: block;
  margin-bottom: 5rem;

  &:before {
    content: "🗓";
    margin-right: 0.5rem;
  }
`

const ContentMetaTime = styled.span`
  cursor: help;
`

const ContentMetaReadingTime = styled.span``

const ContentBody = styled.div`
  line-height: 1.6;
  /*  font-family: "Libre Baskerville", serif;*/

  img {
    display: block;
    border-radius: 4px;
    max-width: 100%;
    margin: 4rem auto;
  }

  iframe {
    display: block;
    width: 100%;
    margin: 6rem auto;
  }

  ul {
    list-style-type: "👉🏻 ";
  }

  a {
    font-weight: bold;
    text-decoration: underline;
    color: #333;
    transition: color 150ms ease, background-color 150ms ease;
  }

  a:hover {
    text-decoration: underline;
    background-color: #333;
    color: #fff;
  }

  a:hover code {
    background: transparent;
    color: #fff;
    box-shadow: none;
    transition: all 150ms ease;
  }

  hr {
    border: 0;
    height: 0;
    border-bottom: 1px dashed #eee;
  }
`

const PostLayout = ({
  children,
  meta: { title, description, date, cover, coverPosition = 50 },
}) => {
  const [coverActive, setCoverActive] = useState(false)

  const handleClickCover = () => setCoverActive(!coverActive)

  const homeUrl = `/`
  const fromNow = dayjs(date).fromNow()
  const readingTime = getReadingTime(children)

  return (
    <>
      <Metadata title={title} cover={cover} description={description} />

      <Layout>
        <Header>
          <Link href={homeUrl}>
            <HomeIcon />
          </Link>

          <Name>{process.env.metadata.title}</Name>
        </Header>

        <Main>
          {cover && (
            <Cover fullscreen={coverActive} onClick={handleClickCover}>
              <CoverImage src={cover} coverPosition={coverPosition} />
            </Cover>
          )}

          <Wrapper>
            <Content cover={cover}>
              <Avatar size={"100px"} />

              <ContentHeading>{title}</ContentHeading>

              {description && (
                <ContentDescription>{description}</ContentDescription>
              )}

              <ContentMeta>
                <ContentMetaTime className="hint--bottom" aria-label={date}>
                  {fromNow}
                </ContentMetaTime>

                {" — "}

                <ContentMetaReadingTime>
                  {`~${readingTime} min`}
                </ContentMetaReadingTime>
              </ContentMeta>

              <ContentBody>{children}</ContentBody>
            </Content>
          </Wrapper>
        </Main>

        <Wrapper>
          <Footer />
        </Wrapper>
      </Layout>
    </>
  )
}

export default PostLayout
