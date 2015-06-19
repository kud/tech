---
title: Windows - Could not find this item
header: http://media.giphy.com/media/h9sHcXAnI9OBG/giphy.gif
date: 2015-04-27
template: post.jade
collection: posts
lang: en
---

You're there, sitting on your chair, comfily and suddenly, you get this error.

[![](/images/windows-could-not-find-this-item/bug.png)](/images/windows-could-not-find-this-item/bug.png)

At start, you don't mind about it and you click on "try again". And oh! It works!

Okay, cool. But now you have this error every fucking time you want to create a folder, or rename it or delete it. Quite boring, isn't it? Mostly that when you click on "try again", it will work.

So you'll go on Internet, find some ~answers~ like this [one](http://answers.microsoft.com/en-us/windows/forum/windows_7-files/renaming-any-folder-produces-could-not-find-this/d907e1d0-648b-4b26-a377-c5116238f336) or maybe people will tell you to create a new profile but it's not your answer.

So you go deeper in the internets and you'll find mine. Maybe it's the good one, maybe it's not, but in my case, it worked.

This bug comes from two facts:

- A certain windows update I installed (I don't know which one)
- I disabled the "Libraries" feature

The solution so?

Re-active the libraries (and re-disable them if you want). Here are the two `.reg`

- [Enable Libraries Feature](/files/windows-could-not-find-this-item/EnableLibrariesFeature.reg)
- [Disable Libraries Feature](/files/windows-could-not-find-this-item/DisableLibariesFeature.reg)

Have a good day. :)

