'use strict';

exports.__esModule = true;
exports['default'] = {
  copy: [{ from: 'babelrc', to: '.babelrc' }, { from: 'editorconfig', to: '.editorconfig' }, { from: 'eslintrc', to: '.eslintrc' }, { from: 'gitignore', to: '.gitignore' }, { from: 'istanbul.yml', to: '.istanbul.yml' }, { from: 'src/lib/index.js', to: 'src/lib/index.js' }],

  tpl: [{ from: 'travis.yml', to: '.travis.yml' }, { from: '_package.json', to: 'package.json' }, { from: '.README.md', to: 'README.md' }, { from: 'test/index.js', to: 'test/index.js' }]
};
module.exports = exports['default'];