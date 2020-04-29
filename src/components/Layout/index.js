import React from "react"

import GlobalStyle from "./GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      {children}
    </>
  )
}

export default Layout
