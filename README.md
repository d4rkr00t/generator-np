<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/200119/11451384/b82444a0-95d5-11e5-8b14-c1bfd0cd6634.png">
</div>

<p align="center">
  <a href="https://npmjs.org/package/generator-np">
    <img src="https://img.shields.io/npm/v/generator-np.svg" alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/generator-np">
    <img src="https://img.shields.io/npm/dm/generator-np.svg" alt="NPM downloads">
  </a>

  <a href="http://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/generator-np.svg" alt="License">
  </a>

  <a href="https://github.com/d4rkr00t/generator-np/issues">
    <img src="https://img.shields.io/github/issues/d4rkr00t/generator-np.svg" alt="Github Issues">
  </a>

  <a href="https://travis-ci.org/d4rkr00t/generator-np">
    <img src="https://img.shields.io/travis/d4rkr00t/generator-np.svg" alt="Travis Status">
  </a>

  <a href="https://coveralls.io/github/d4rkr00t/generator-np">
    <img src="https://img.shields.io/coveralls/d4rkr00t/generator-np.svg" alt="Coveralls">
  </a>

  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly">
  </a>
</p>

<p align="center"><big>
Generator for npm module with ES6+, <a href="https://github.com/babel/babel">Babel</a>, <a href="https://github.com/sindresorhus/ava">Ava</a>, <a href="https://github.com/eslint/eslint">ESlint</a>, <a href="https://travis-ci.org">Travis</a>, and npm scripts
</big></p>

## Features
* Generates npm module structure with babel, ava, pre-commit hooks, linters, etc;
* Adds usefull npm scripts which helps with testing, publishing, etc;
* [Optional] generate CLI boilerplate;
* [Optional] generate configs for travis and coveralls;
* [Optional] setup module to use commitizen and cz-conventional-changelog;
* [Optional] center module name and badges in README.md;
* [Optional] automatic [github releases](https://help.github.com/articles/about-releases/) through [conventional-github-releaser](https://github.com/stevemao/conventional-github-releaser#setup-token-for-cli), **requires setup for travis and commitizen**.

![generator-np](https://cloud.githubusercontent.com/assets/200119/11610391/f3511598-9bb2-11e5-95bb-43844ef06d34.png)

## Install

```
npm install -g generator-np
```

## Usage
> You need [Yeoman](http://yeoman.io/) to run this command.

```
yo np
```

## Author

Stanislav Sysoev <d4rkr00t@gmail.com> http://github.com/d4rkr00t

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome! This repo is commitizen friendly — please read about it [here](http://commitizen.github.io/cz-cli/).
