'use strict';

exports.__esModule = true;
exports['default'] = {
  copy: [{ from: 'babelrc', to: '.babelrc' }, { from: 'editorconfig', to: '.editorconfig' }, { from: 'eslintrc', to: '.eslintrc' }, { from: 'gitignore', to: '.gitignore' }, { from: 'istanbul.yml', to: '.istanbul.yml' }, { from: 'src/lib/index.js', to: 'src/lib/index.js' }, { from: 'test/setup.js', to: 'test/setup.js' }],

  tpl: [{ from: 'travis.yml', to: '.travis.yml' }, { from: '_package.json', to: 'package.json' }, { from: '.README.md', to: 'README.md' }]
};
module.exports = exports['default'];