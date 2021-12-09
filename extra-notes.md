watch the freecode camp video on database design

Basic unit testing.

Host on AWS + deploy a docker container + configure Azure & GCP backups via Terraform

Docker:
https://www.youtube.com/watch?v=_dfLOzuIg2o
https://www.youtube.com/watch?v=JSLpG_spOBM

Containers:
https://www.youtube.com/watch?v=0qotVMX-J5s

Kubernetes & Docker:
https://azure.microsoft.com/en-us/topic/kubernetes-vs-docker/
https://www.youtube.com/watch?v=2vMEQ5zs1ko&t=1s
https://www.youtube.com/watch?v=HmxkYNv1ksg

Terraform:
https://www.youtube.com/watch?v=tomUWcQ0P3k


next step:

Game logic
https://www.youtube.com/watch?v=NxRwIZWjLtE
https://www.youtube.com/watch?v=28VfzEiJgy4

css modules vs. styled components?

blah.module.css

Study JavaScript in depth: https://www.javascripttutorial.net/es6/ & https://javascript.info/


# Extra notes

You did a manual setup instead of create-react-app

Jeans-Air:war jeanleconteii$ npm run start-user-interface

> war@1.0.0 start-user-interface
> react-scripts start

Could not find a required file.
  Name: index.js
  Searched in: /Users/jeanleconteii/war/src

https://www.robotstxt.org/robotstxt.html

You don't need the icons in manifest.json from create-react-app

https://developers.google.com/web/fundamentals/web-app-manifest/

https://www.w3schools.com/tags/tag_noscript.asp

https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
^was in index.css

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family


Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

Let's see each individual query in your example:

0.2%: All browsers that have at least 0,2% of global market share
not dead: Exclude browsers without official support in the last 24 months
not ie <= 11: Exclude IE 11 and older versions
not op_mini all: Exclude Opera Mini


server side render (via NextJS)
  - a good looking home page using wizard news as example
  - page that shows wins and losses for both players

NextJS tutorial
-> ReactJS framework that allows for server side rendering (remember ReactJS is a libary)
-> traditional react apps is all loaded on the client -> funneled through a single html page
-> client side rendering means for every change you need to make a request to the server
-> in next the first page is rendered from the server (better for seo purposes because they can see all the tags)
-> removes the need for 'react-router-dom' to navigate between pages (just like php)

* requires a recent version of node -> you can get it via the installer from Node's website


Manual Setup
Install next, react and react-dom in your project:

npm install next react react-dom
or
yarn add next react react-dom

Open package.json and add the following scripts:

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

These scripts refer to the different stages of developing an application:

dev - Runs next dev which starts Next.js in development mode
build - Runs next build which builds the application for production usage
start - Runs next start which starts a Next.js production server
lint - Runs next lint which sets up Next.js' built-in ESLint configuration
Next.js is built around the concept of pages. A page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory.

Pages are associated with a route based on their file name. For example pages/about.js is mapped to /about. You can even add dynamic route parameters with the filename.
^no need for 3rd party router install

To start developing your application run npm run dev or yarn dev.
This starts the development server on http://localhost:3000.

Visit http://localhost:3000 to view your application.

So far, we get:

Automatic compilation and bundling (with webpack and babel)
React Fast Refresh
Static generation and server-side rendering of ./pages/
Static file serving. ./public/ is mapped to /
In addition, any Next.js application is ready for production from the start, read more in our Deployment documentation.

* npm init -> programmatic way to create a package.json

* everything in public folder is directly assemble from the browser -> localhost3000/...filename...
  * good for images

npm init -> creates the package.json
