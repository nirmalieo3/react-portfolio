# react-portfolio
Create an empty repository on GitHub.
Create a new React app on your computer
Install the gh-pages package as a "dev-dependency" of the app. (1 minute)

$ cd react-gh-pages
$ npm install gh-pages --save-dev
Add some properties to the app's package.json file.
"homepage": "http://gitname.github.io/react-gh-pages"
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Create a git repository in the app's folder. (1 minute)

$ git init
Initialized empty Git repository in C:/path/to/react-gh-page

Add the GitHub repository as a "remote" in your local git repository. (1 minute)

$ git remote add origin https://github.com/gitname/react-gh-pages.git
Generate a production build of your app, and deploy it to GitHub Pages. (2 minutes)

$ npm run deploy
Optionally, commit your source code to the "master" branch and push your commit to GitHub. (1 minute)

$ git add .
$ git commit -m "Create a React app and publish it to GitHub Pages"
$ git push origin master
