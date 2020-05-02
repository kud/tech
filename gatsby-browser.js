import React from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "@emotion/styled"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"

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

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1em;
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
  inlineCode: ({ children }) => <Code>{children}</Code>,

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
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>

                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    )
  },
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
