---
title: How to avoid popup blockers when ajax + event
header: http://media.giphy.com/media/JdDnwsVcpa1B6/giphy.gif
date: 2015-04-03
template: post.jade
collection: posts
lang: en
---

Hey there,

Today, I'll give you a little trick to avoid the popup blocker on browsers when you do an http request between your user event and opening the popup.

You know how to open a [popup](https://developer.mozilla.org/en-US/docs/Web/API/Window/open), it's quite simple:

```javascript
(function() {
  window.open( strUrl, strWindowName, strWindowFeatures )
})
```

Now, you want to open it when the user clicks on your button:

```javascript
(function() {
  document.querySelector('.kud-js-MyButton').addEventListener('click', function() {
      window.open( strUrl, strWindowName, strWindowFeatures )
    })
})
```

But before opening the popup, you maybe want to get some informations from the backend by doing an ajax request:

(to ease the code, I use [bloody-request](https://github.com/bloodyowl/request))

```javascript
(function() {
  document.querySelector('.kud-js-MyButton').addEventListener('click', function() {

      bloodyRequest.get( url )
        .then(
          function success ( res ) {
            window.open( res.url , strWindowName, strWindowFeatures )
          },
          function error() {}
        )
    })
})
```

This is where you're doing it wrong.

Indeed, because you make an ajax request between the event and the final "window.open", the browser will cry and blocks your popup.

The solution is to make the popup first and to change its location just after. Like that:

```javascript
(function() {
  document.querySelector('.kud-js-MyButton').addEventListener('click', function() {

      var popup = window.open( strUrl, strWindowName, strWindowFeatures )

      bloodyRequest.get( url )
        .then(
          function success ( res ) {
            popup.location = res.url
          },
          function error() {
            popup.close()
          }
        )
    })
})
```

Now, you'll be able to start your popup and use the result of your request ajax to adjust it.

Enjoy.

