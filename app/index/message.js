'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onEndMessage;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function travis() {
  return _chalk2.default.magenta('Travis:') + '\nTravis CI — continues integration for your npm package.\nSetup travis-ci — https://travis-ci.org/';
} // Travis
// Coveralls
// Commitizen
// Greenkeeper

function coveralls() {
  return _chalk2.default.yellow('Coveralls:') + '\nCoveralls — code coverage report.\nSetup coveralls — https://coveralls.io/';
}

function commitizen() {
  return _chalk2.default.blue('Commitizen:') + '\nFor finishing setup install \'commitizen\' module globally. And then just use \'git cz\' instead of \'git commit\'.\nnpm i -g commitizen';
}

function greenkeeper() {
  return _chalk2.default.green('Greenkeeper:') + '\nGreenkeeper automates dependency updates.\nSetup greenkeeper — http://greenkeeper.io/';
}

function onEndMessage(log, props) {
  log('');
  log(_chalk2.default.bold('=-=-=-=-=-=-=- You are almost done! -=-=-=-=-=-=-='));
  log('');
  if (props.travis) {
    log(travis());
    log('');
  }

  if (props.coveralls) {
    log(coveralls());
    log('');
  }

  if (props.commitizen) {
    log(commitizen());
    log('');
  }

  log(greenkeeper());
}