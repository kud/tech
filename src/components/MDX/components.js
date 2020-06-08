import styled from "@emotion/styled"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"
import { paramCase } from "param-case"

import onlyText from "~/lib/react-children-utilities/only-text"

import PostLayout from "~/components/Layout/Post"

const Anchor = styled.a`
  margin-top: -40px;
  padding-top: 40px;

  text-decoration: none !important;
  color: #45423c !important;

  &:hover {
    color: #45423c !important;
  }
`

const Hx = styled.span`
  position: relative;
  text-decoration: none;

  &:before {
    content: "#";
    position: absolute;
    left: -15px;
    top: 0;
    opacity: 0;
    transition: all 300ms ease;
    color: #94a5a6;
  }

  &:hover {
    &:before {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`

const Code = styled.code`
  background: #33363e;
  color: rgb(255, 255, 255);
  padding: 0.2rem 0.5rem;
  font-size: 1.6rem;
  line-height: 1.4;
  vertical-align: 1px;
  border-radius: 4px;
  font-family: monospace;
  border: 4px solid #33363e;
  border-top-width: 2px;
  border-bottom-width: 2px;
`

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0.5rem 2rem;
  padding-left: 8rem;
  border-radius: 4px;
  background-color: #f3f3f3;
  position: relative;
  font-size: 1.7rem;

  &:before {
    position: absolute;
    top: 45%;
    left: 3rem;
    content: "💬";
    margin-right: 2rem;
    font-style: normal;
  }
`

const Pre = styled.pre`
  text-align: left;
  margin: 3rem 0;
  padding: 1rem 2rem 1rem 0rem;
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
  width: 6rem;
  flex-shrink: 0;
`

const LineContent = styled.span`
  padding-right: 2rem;
`

const components = {
  wrapper: PostLayout,

  h1: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h1">{children}</Hx>
    </Anchor>
  ),

  h2: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h2">{children}</Hx>
    </Anchor>
  ),

  h3: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h3">{children}</Hx>
    </Anchor>
  ),

  h4: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h4">{children}</Hx>
    </Anchor>
  ),

  h5: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h5">{children}</Hx>
    </Anchor>
  ),

  h6: ({ children }) => (
    <Anchor
      href={`#${paramCase(onlyText(children))}`}
      id={`${paramCase(onlyText(children))}`}
    >
      <Hx as="h6">{children}</Hx>
    </Anchor>
  ),

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

export default components
