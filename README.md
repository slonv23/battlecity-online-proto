# battlecity-online-proto

## Overview

The application is 2d online shooter inspired by battle city game.
It consists of two pars: server (written in Java) and client (written in JS).
Main tenchnologies had used:
- Java Spring Framework (webmvc and websocket modules)
- Gradle (main build tool which assembles backend and frontend together)
- JS (es6) for fronted. Canvas is used for rendering and native api for websockets.
- Webpack (build tool which assebles fronted, used by Gradle to assemble entire app)

Project is not fully completed, it may have some useless comments, unused code/files.
The chat ("say hello" button) is not working.

![screenshot](https://cdn1.imggmi.com/uploads/2019/8/31/70bb25abf027f9874328693f61d8ffea-full.jpg)

Video demonstration https://www.loom.com/share/53048aae74384bceaab570de0dc4255e

## Starting the app
Run "appRun" task of gretty plugin. It will build backend and fronted, start embeded web server and deploy app.
That's it.

![screenshot](https://cdn1.imggmi.com/uploads/2019/8/31/0655c7f1848dada3a79afd1e9e8a6e08-full.jpg)

After backend web server started you can rebuild frontend without need to restart web server. Use these tasks:

![screenshot](https://cdn1.imggmi.com/uploads/2019/8/31/09950827d48b5733db8294abee7bed0c-full.jpg)
