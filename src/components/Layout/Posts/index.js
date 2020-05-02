import React from "react"
import styled from "@emotion/styled"

import backgroundSrc from "~/images/background.jpg"

import Link from "~/components/Link"
import Footer from "~/components/Footer"
import Avatar from "~/components/Avatar"

import Layout from "./../index.js"

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 30vh;
  overflow: hidden;
`

const CoverImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center 50%;
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  background-color: #ffffff;
  margin-top: 30vh;
  position: relative;
  padding-top: 30px;
  font-size: 1.8rem;
`

const Wrapper = styled.div`
  max-width: 900px;
  padding: 2rem 2rem;
  margin: auto;
`

const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
`

const Heading = styled.h1`
  text-align: center;
`

const Subheading = styled.h2``

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li``

const Time = styled.time`
  color: #aaa;
  margin-right: 1rem;
  width: 13rem;
  display: inline-block;
  text-align: right;
`

const PostsLayout = ({ posts }) => {
  return (
    <Layout>
      <Cover>
        <CoverImage src={backgroundSrc} />
      </Cover>

      <Main>
        <Wrapper>
          <AvatarBox>
            <Avatar size={"100px"} />
          </AvatarBox>

          <Heading>Diary of the _kud</Heading>

          <Subheading>Articles</Subheading>

          <List>
            {posts.map(
              ({ url, redirect, title, date }, i) => (
                console.log(redirect),
                (
                  <ListItem key={i}>
                    <Time>{date}</Time>
                    <Link to={redirect ? redirect : url}>{title}</Link>
                  </ListItem>
                )
              )
            )}
          </List>
        </Wrapper>
      </Main>

      <Wrapper>
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default PostsLayout
