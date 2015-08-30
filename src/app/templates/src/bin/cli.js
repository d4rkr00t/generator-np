#! /usr/bin/env node

import meow from 'meow';
import chalk from 'chalk';
import <%= camelModuleName %> from '../lib/';

const cli = meow({
  pkg: '../package.json',
  help: [
    'Usage',
    '  $ <%= moduleName %> [input]',
    '',
    'Options',
    '  --foo  Lorem ipsum. [Default: false]',
    '',
    'Examples',
    '  $ <%= moduleName %>',
    '  unicorns & rainbows',
    '  $ <%= moduleName %> ponies',
    '  ponies & rainbows'
  ]
});
