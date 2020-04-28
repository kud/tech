import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Global from "~/components/Layout/Global"

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

const Avatar = styled.div`
  width: 15rem;
  height: 15rem;
  display: block;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`

const EntryLink = styled(Link)`
  display: inline-block;
  padding: 15px 20px;
  margin: 0 20px;
  color: #333;
  font-size: 3rem;
  border-bottom: 2px dotted transparent;
  transition: 0.5s ease;
  text-decoration: none;

  &:hover {
    border-bottom-color: #333;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Avatar {
      gravatar(email: { eq: "m@kud.io" }) {
        url
      }
    }
  `)

  return (
    <Global>
      <Wrapper>
        <Container>
          <AvatarBox>
            <Avatar>
              <a href="http://kud.io">
                <img src={data.gravatar.url} />
              </a>
            </Avatar>
          </AvatarBox>

          <EntryLink to="/fr/posts/">{"fr_FR"}</EntryLink>
          <EntryLink to="/en/posts/">{"en_UK"}</EntryLink>
        </Container>
      </Wrapper>
    </Global>
  )
}

export default IndexPage
