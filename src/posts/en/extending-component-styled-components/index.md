---
title: Extending your react component with styled-components
date: 2019-10-30
cover: /images/extending-component-styled-components/cover.png
layout: post.pug
collection: posts
---

Yesterday, I was playing with [styled-components](https://www.styled-components.com/) and I wanted to change the style of my `<Layout/>` component injected into another component for a specific case but I didn't understand why it didn't work when I extended it.

Imagine this:

```javascript
// layout.js

const Root = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
`

const Main = styled.div``
const Aside = styled.div``

class Layout extends React.Component {
  render() {
    const { children, aside } = this.props

    return (
      <Root>
        <Main>
          {children}
        </Main>

        {aside && (
          <Aside>
            {aside}
          </Aside>
        )}
      </Root>
    )
  }
}

export default Layout
```

```javascript
// page.js

const AnotherLayout = styled(Layout)`
  background-color: #333;
`

class Page extends React.Component {
  render() {
    return (
      <AnotherLayout>
        {"Hello!"}
      </AnotherLayout>
    )
  }
}

export default Page
```

As you can see here, I extended my `<Layout>` to change the property `background-color`. However, when I did that, nothing happened and I was thinking why.

The reason is that you need to also transfer the className. Ha!

The trick is here, in `layout.js`, add the `className`.

```javascript
// layout.js
class Layout extends React.Component {
  render() {
    const { className, children, aside } = this.props

    return (
      <Root className={className}>
        {...}
      </Root>
    )
  }
}

export default Layout
```

and now, it's fine! (works also on emotion). 🙏
