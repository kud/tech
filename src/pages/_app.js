import React from "react"
import Head from "next/head"
import { MDXProvider } from "@mdx-js/react"
import styled from "@emotion/styled"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"

// Global styles must be necessarily here: https://github.com/zeit/next.js/blob/master/errors/css-global.md
import "normalize.css"
import "hint.css"

import "~/styles/box-sizing.css"
import "~/styles/fonts.css"
import "~/styles/define-rem.css"
import "~/styles/selection.css"
import "~/styles/global-animation.css"
import "~/styles/base.css"

import PostLayout from "~/components/Layout/Post"

const Code = styled.code`
  background: #1b2b34;
  color: rgb(255, 255, 255);
  padding: 0.2rem 0.5rem;
  font-size: 1.6rem;
  line-height: 1.4;
  vertical-align: 1px;
  border-radius: 4px;
  font-family: monospace;
`

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  font-style: italic;

  &:before {
    content: "💬";
    margin-right: 2rem;
    font-style: normal;
  }
`

const Pre = styled.pre`
  text-align: left;
  margin: 3rem 0;
  padding: 1rem 2rem;
  overflow: scroll;
  border-radius: 4px;
`

const Line = styled.div`
  display: flex;
`

const LineNo = styled.span`
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  padding-right: 2rem;
`

const components = {
  wrapper: PostLayout,

  inlineCode: ({ children }) => <Code>{children}</Code>,

  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,

  pre: ({ children }) => {
    const className = children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)

    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => {
              // @HACK: for a reason I don't know, there's an empty line in the end of any code part
              if (line[0].content === "" && i === tokens.length - 1) {
                return undefined
              }

              return (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>

                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              )
            })}
          </Pre>
        )}
      </Highlight>
    )
  },
}

const App = ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
  </MDXProvider>
)

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//
//   console.log(appProps)
//
//   return { ...appProps }
// }

export default App
