# generator-np

[![npm](https://img.shields.io/npm/v/generator-np.svg)](https://www.npmjs.com/package/generator-np)
[![license](https://img.shields.io/npm/l/generator-np.svg)](http://opensource.org/licenses/MIT)
[![github-issues](https://img.shields.io/github/issues/d4rkr00t/generator-np.svg)](https://github.com/d4rkr00t/generator-np/issues)
[![travis-status](https://img.shields.io/travis/d4rkr00t/generator-np.svg)](https://travis-ci.org/d4rkr00t/generator-np)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Generator for npm module

![nodei.co](https://nodei.co/npm/generator-np.png?downloads=true&downloadRank=true&stars=true)

## Features
* Generate npm module structure with babel, isparta and mocha;
* Generate package.json with some useful scripts like: [nsp check](https://www.npmjs.com/package/nsp), eslint + pre-commit hook and node-readme for generating README;
* [Optional] generate CLI boilerplate;
* [Optional] generate configs for travis and coveralls;
* [Optional] setup module to use commitizen and cz-conventional-changelog.

![generator-np](https://cloud.githubusercontent.com/assets/200119/10646398/8f24a78c-783b-11e5-9755-8f57f28ba187.png)

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
[chalk](https://www.npmjs.com/package/chalk) | ^1.1.1 | ✖
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
