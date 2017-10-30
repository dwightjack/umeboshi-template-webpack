# Umeboshi Webpack Template

## Features

* [Webpack 2+](https://webpack.js.org/)
* ES6+ with [Babel](https://babeljs.io/), [env](https://github.com/babel/babel-preset-env) and [stage-2](https://babeljs.io/docs/plugins/preset-stage-2/) presets
* Unit test with [Jest](https://facebook.github.io/jest/)
* CSS and JS linting with [ESLint](http://eslint.org/) (airbnb preset) and [Stylelint](https://stylelint.io/)
* [Sass](http://sass-lang.com/) with [node-sass](https://github.com/sass/node-sass)
* CSS [post-processing](https://github.com/postcss/postcss)
* [CSS Modules](https://github.com/css-modules/css-modules)
* Em based media-queries via [sass-mq](https://github.com/sass-mq/sass-mq)

### Optional built-in Libraries

* [React](https://facebook.github.io/react/)
  * HMR
  * JSX
  * [Enzyme](http://airbnb.io/enzyme/)
* [Vue.js](https://vuejs.org/)
  * HMR
  *  `.vue` file support (no JSX support ATM)
  * [avoriaz](https://github.com/eddyerburgh/avoriaz)
  

## Requirements

* Node.js >= 6.9.0 (we strongly suggest to use something like [nvm](https://github.com/creationix/nvm))
* npm or [yarn](https://yarnpkg.com/lang/en/)

## Installation

Install latest [umeboshi-cli](https://github.com/dwightjack/umeboshi-cli) if not yet installed

```
$ npm install -g umeboshi-cli
```

Use `webpack` as template

```
$ umeboshi create webpack <project-folder>
```

Example:

```
$ umeboshi create webpack my-project-folder
```
