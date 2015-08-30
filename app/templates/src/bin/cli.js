#! /usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var cli = _meow2['default']({
  pkg: '../package.json',
  help: ['Usage', '  $ <%= moduleName %> [input]', '', 'Options', '  --foo  Lorem ipsum. [Default: false]', '', 'Examples', '  $ <%= moduleName %>', '  unicorns & rainbows', '  $ <%= moduleName %> ponies', '  ponies & rainbows']
});