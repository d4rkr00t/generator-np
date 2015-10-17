// Travis
// Coveralls
// Commitizen
// Greenkeeper

import chalk from 'chalk';

function travis() {
  return chalk.magenta('Travis:')
  + `
Travis CI — continues integration for your npm package.
Setup travis-ci — https://travis-ci.org/`;
}

function coveralls() {
  return chalk.yellow('Coveralls:')
  + `
Coveralls — code coverage report.
Setup coveralls — https://coveralls.io/`;
}

function commitizen() {
  return chalk.blue('Commitizen:')
  + `
For finishing setup install 'commitizen' module globally. And then just use 'git cz' instead of 'git commit'.
npm i -g commitizen`;
}

function greenkeeper() {
  return chalk.green('Greenkeeper:')
  + `
Greenkeeper automates dependency updates.
Setup greenkeeper — http://greenkeeper.io/`;
}

export default function onEndMessage(log, props) {
  log('');
  log(chalk.bold('=-=-=-=-=-=-=- Your almost done -=-=-=-=-=-=-='));
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
