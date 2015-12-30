---
title: Python and BROWSER environment variable are not friends (yet?)
cover: /images/python-bug-browser-variable/cover.gif
date: 2015-12-30
layout: post.jade
collection: posts
---

Yesterday I wanted to use [HTML-CSS-JS Prettify](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify) on my Sublime Text, and it didn't work. I opened the console and I saw this:

`AttributeError: 'MacOSXOSAScript' object has no attribute 'basename'.`

Oh but? It wasn't the first time I had this error and I didn't know why: on [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1012443), and on [MkDocs](https://github.com/mkdocs/mkdocs/issues/465).

So where does this bug come from?? It comes from `webbrowser` python lib.

You just have to start `$ python -c 'import webbrowser; webbrowser.open("http://kud.io")'` to get it.

See the tracelog:

```console
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/usr/local/Cellar/python/2.7.11/Frameworks/Python.framework/Versions/2.7/lib/python2.7/webbrowser.py", line 669, in <module>
    cmd = _synthesize(cmdline, -1)
  File "/usr/local/Cellar/python/2.7.11/Frameworks/Python.framework/Versions/2.7/lib/python2.7/webbrowser.py", line 94, in _synthesize
    if controller and name.lower() == controller.basename:
AttributeError: 'MacOSXOSAScript' object has no attribute 'basename'
```

And why do you get that so? Because you defined the BROWSER environment variable, like this for instance:

```console
export FIREFOXNIGHTLY_BIN="/Applications/FirefoxNightly.app/Contents/MacOS/firefox"
export BROWSER=$FIREFOXNIGHTLY_BIN
```

It's already [logged and will be fixed](https://bugs.python.org/issue24955) but for the moment either you **patch your [webbrowser.py](https://github.com/python-git/python/blob/master/Lib/webbrowser.py#L94)** or you **[comment the export of BROWSER](https://github.com/kud/my/commit/b78b46441a64c185a6178d3bd707e22b9a236cb7)**.

