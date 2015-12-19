---
title: GTA V PC - How to fix the BEX64 error
cover: /images/gta-v-pc-fix-bex64-error/cover.jpg
date: 2015-04-15
template: post.jade
collection: posts
---

GTA V on PC is now out! but not without pain.

I was really excited when I saw I was able to preload the game. 64gb is huge but with an optical fiber, it was a piece of cake. So I started my computer this weekend and downloaded the game.

April, the 14th, as the game was out, I wanted to play to this promising game and **oops**, it didn't work. For fuck's sake, it doesn't bloody work!

This is what I had:

[![](/images/gta-v-pc-fix-bex64-error/bug.png)](/images/gta-v-pc-fix-bex64-error/bug.png)

Clear, right? Well not really.

So I saw the details and the error came from something like "BEX64".

I won't tell you everything I did to find the answer of this bug but the reason is: [MacType](https://code.google.com/p/mactype/).

[I love MacType](http://diary.kud.io/la-bonne-fonte-de-caract-res-sous-windows/), really. It makes my fonts pleasant on Windows. But it can also crash some of them which don't enjoy the switch of the font render engine.

Anyway. This is one of the solutions (I can't say it works on every pc but it works for me) if you have some troubles to start `GTAVLauncher.exe` and you have a "BEX64" / "StackHash" troubles; disable MacType for `GTAVLauncher.exe`.

Follow the manoeuvre:

- Start `GTAVLauncher.exe` (or GTA via Steam)
- It will crash
- Stay like that, do not close the crash window
- Go to MacType folder and start `MacWiz.exe`
[![](/images/gta-v-pc-fix-bex64-error/mactype.png)](/images/gta-v-pc-fix-bex64-error/mactype.png)
- On the left-bottom corner, click on `Process manager`
- Select `GTAVLauncher.exe` and right-click on it
- Tick `Exclude this process` and `Don't replace font for this process` (I don't know the difference between them but just tick on. :))
[![](/images/gta-v-pc-fix-bex64-error/disable-gta-launcher.png)](/images/gta-v-pc-fix-bex64-error/disable-gta-launcher.png)
- Close the GTA crash window
- Start GTA
- Enjoy 😊

By the way, you could also have a problem with your Windows username. See [How to Fix Problems Installing or Playing GTAV PC On Windows User Accounts Containing Certain Characters](https://support.rockstargames.com/hc/en-us/articles/204772198)

Have fun.

[![](http://media.giphy.com/media/Pp0P0yUpqwukM/giphy.gif)](http://media.giphy.com/media/Pp0P0yUpqwukM/giphy.gif)

