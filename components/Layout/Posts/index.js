import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Metadata from "components/Metadata"
import Footer from "components/Footer"
import Avatar from "components/Avatar"

import Layout from "../index.js"

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
  /*  object-position: center 50%;*/
  object-position: center 35%;
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
  font-family: "Libre Baskerville", serif;
`

const Subheading = styled.h2``

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: stretch;
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid #e3e3e2;
  border-radius: 6px;
  overflow: hidden;
  transition: all 100ms ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 11px;
    /*    transform: translateX(-1rem);*/
    transform: scale(1.01);
    /*    border-color: #a4a4a1;*/
  }

  ${({ redirect }) =>
    redirect &&
    css`
      border: 1px dashed #e3e3e2;
    `}
`

const ImageBox = styled.div`
  /*  flex-grow: 0;*/
  flex-shrink: 0;
  /*  flex-basis: auto;*/
  overflow: hidden;
  min-height: 100px;
  width: 100px;
  background-color: #faf3f5;
  border-right: 1px solid #e3e3e2;
`

const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center 50%;
  width: 100%;
  height: 100%;
  border: 0;
`

const ContentBox = styled.div`
  padding: 0.8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.h3`
  margin: 0;
`

const Description = styled.div``

const Time = styled.time`
  color: #aaa;
  font-size: 1.3rem;
  display: block;
  text-align: right;
  margin-top: 1rem;
`

const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${({ redirect }) =>
    redirect &&
    css`
      cursor: alias;
    `}
`

const PostsLayout = ({ posts }) => {
  return (
    <>
      <Metadata title="Articles" />

      <Layout>
        <Cover>
          <CoverImage src="/images/background.jpg" />
        </Cover>

        <Main>
          <Wrapper>
            <AvatarBox>
              <Avatar size={"100px"} />
            </AvatarBox>

            <Heading>{process.env.metadata.title}</Heading>

            <Subheading>Articles</Subheading>

            <List>
              {posts.map(
                ({ slug, redirect, title, date, cover, description }, i) => (
                  <ListItem key={i} redirect={redirect}>
                    <ImageBox>
                      <Image
                        src={
                          cover
                            ? cover
                            : "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=640"
                        }
                      />
                    </ImageBox>

                    <ContentBox>
                      <div>
                        <Title>{title}</Title>

                        {description && (
                          <Description>{description}</Description>
                        )}
                      </div>

                      <Time>{date}</Time>
                    </ContentBox>

                    {redirect ? (
                      <Link
                        href={redirect}
                        target="_blank"
                        rel="noopener noreferrer"
                        redirect
                      />
                    ) : (
                      <Link href={`/posts/${slug}`} />
                    )}
                  </ListItem>
                ),
              )}
            </List>
          </Wrapper>
        </Main>

        <Wrapper>
          <Footer />
        </Wrapper>
      </Layout>
    </>
  )
}

export default PostsLayout
