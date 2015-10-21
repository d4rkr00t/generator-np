#! /usr/bin/env node

import meow from 'meow';
import chalk from 'chalk';
import <%= camelModuleName %> from './lib/';

const cli = meow({
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

const input = cli.input || [];
const flags = cli.flags || {};

console.log(cli.help);
