# generator-np

[![npm](https://img.shields.io/npm/v/generator-np.svg)](https://www.npmjs.com/package/generator-np)
[![license](https://img.shields.io/npm/l/generator-np.svg)](http://opensource.org/licenses/MIT)
[![github-issues](https://img.shields.io/github/issues/d4rkr00t/generator-np.svg)](https://github.com/d4rkr00t/generator-np/issues)
[![travis-status](https://img.shields.io/travis/d4rkr00t/generator-np.svg)](https://travis-ci.org/d4rkr00t/generator-np)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Generator for npm module

![nodei.co](https://nodei.co/npm/generator-np.png?downloads=true&downloadRank=true&stars=true)

## Features
* Generates npm module structure with babel, isparta and mocha
* Can generate CLI boilerplate
* Generates configs for travis and coveralls
* Adds .babelrc, .editorconfig, .eslintrc, .gitignore, .istanbul.yml, .travis.yml, .README.md - for node-readme module
* Generates setup for test and coverage with isparta, mocha and chai
* Generates package.json with some useful scripts like: [nsp check](https://www.npmjs.com/package/nsp), eslint + pre-commit hook, node-readme for README generation.

### Dev dependencies which will be in your package.json after generation:
* [babel](https://www.npmjs.com/babel)
* [babel-eslint](https://www.npmjs.com/babel-eslint)
* [chai](https://www.npmjs.com/chai)
* [coveralls](https://www.npmjs.com/coveralls)
* [eslint](https://www.npmjs.com/eslint)
* [isparta](https://www.npmjs.com/isparta)
* [mocha](https://www.npmjs.com/mocha)
* [mocha-lcov-reporter](https://www.npmjs.com/mocha-lcov-reporter)
* [node-readme](https://www.npmjs.com/node-readme)
* [nsp](https://www.npmjs.com/nsp)
* [pre-commit](https://www.npmjs.com/pre-commit)

## Install

```
npm install -g generator-np
```

## Usage

```
yo np
```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[normalize-url](https://www.npmjs.com/package/normalize-url) | ^1.3.1 | ✖
[underscore.string](https://www.npmjs.com/package/underscore.string) | ^3.2.2 | ✖
[yeoman-generator](https://www.npmjs.com/package/yeoman-generator) | ^0.20.3 | ✖
[babel](https://www.npmjs.com/package/babel) | ^5.8.23 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | ^4.1.3 | ✔
[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) | ^1.1.4 | ✔
[eslint](https://www.npmjs.com/package/eslint) | ^1.7.0 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^2.3.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nsp](https://www.npmjs.com/package/nsp) | ^1.1.0 | ✔
[pre-commit](https://www.npmjs.com/package/pre-commit) | ^1.1.1 | ✔
[yeoman-assert](https://www.npmjs.com/package/yeoman-assert) | ^2.1.0 | ✔


## Author

Stanislav Sysoev <d4rkr00t@gmail.com> http://github.com/d4rkr00t

## License

 - **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributing are highly welcome!
