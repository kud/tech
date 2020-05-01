import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

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

const EntryLink = styled(Link)`
  display: inline-block;
  padding: 15px 20px;
  margin: 0 20px;
  color: #333;
  font-size: 3rem;
  border-bottom: 2px dotted transparent;
  transition: border 300ms ease;
  text-decoration: none;

  &:hover {
    border-bottom-color: #333;
  }
`

const IndexPage = () => {
  return (
    <HomeLayout>
      <Wrapper>
        <Container>
          <AvatarBox>
            <Avatar />
          </AvatarBox>

          <EntryLink to="/fr/posts/">{"fr_FR"}</EntryLink>
          <EntryLink to="/en/posts/">{"en_UK"}</EntryLink>
        </Container>
      </Wrapper>
    </HomeLayout>
  )
}

export default IndexPage
