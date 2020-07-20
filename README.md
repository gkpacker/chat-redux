# Redux Chat ![language](https://img.shields.io/badge/language-JavaScript-yellow.svg)

> A simple React + Redux app with the following config:

- React, ReactDOM
- Redux, React-Redux
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Features](#star-features)
- [Bonus](#unicorn-bonus)

## :package: Installation

```sh
git clone git@github.com:gkpacker/chat-redux.git
cd chat-redux
yarn install
```

## :rocket: Usage

To start a server simply run:

```sh
yarn start
```

## :star: Features

* On page load, the browser prompts me for a username
* After the username prompt, the chat loads with a default channel selected. Messages appear and scroll down to the most recent
* Focus is set on message box on load
* I can type a message and post it. It instantly appears right above the message box, and the message box clears. Focus is kept on message box
* When I post a message, it's under the username I set on page load
* When I click on another channel, the messages from the previous one disappear, and the messages from the newly selected channel appear

## :unicorn: Bonus
1. Colorize usernames

2. Emojis

3. Deploy on Github Pages 🎉 

