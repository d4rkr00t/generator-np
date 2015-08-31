'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _underscoreString = require('underscore.string');

var _underscoreString2 = _interopRequireDefault(_underscoreString);

var copyList = [{ from: 'babelrc', to: '.babelrc' }, { from: 'editorconfig', to: '.editorconfig' }, { from: 'eslintrc', to: '.eslintrc' }, { from: 'gitignore', to: '.gitignore' }, { from: 'istanbul.yml', to: '.istanbul.yml' }, { from: 'travis.yml', to: '.travis.yml' }, { from: 'src/lib/index.js', to: 'src/lib/index.js' }, { from: 'test/setup.js', to: 'test/setup.js' }];

var tplList = [{ from: '_package.json', to: 'package.json' }, { from: 'README.md', to: '.README.md' }];

function getGithubUsername(user) {
  return new Promise(function (resolve, reject) {
    user.github.username(function (err, githubUsername) {
      if (err) reject(err);

      resolve(githubUsername);
    });
  });
}

function userInteraction(githubUsername) {
  var _this = this;

  return new Promise(function (resolve) {
    _this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      'default': _this.appname.replace(/\s/g, '-'),
      required: true,
      filter: function filter(val) {
        return _underscoreString2['default'].slugify(val);
      }
    }, {
      name: 'moduleDescription',
      message: 'What is description for your module?',
      'default': 'My awesome module',
      required: true
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      'default': githubUsername,
      required: true
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true,
      'default': 'https://github.com/' + githubUsername,
      required: true,
      filter: function filter(val) {
        return _normalizeUrl2['default'](val);
      }
    }, {
      name: 'cli',
      message: 'Do you need a CLI?',
      type: 'confirm',
      'default': false
    }], resolve);
  });
}

function generate(props) {
  var _this2 = this;

  var tpl = {
    moduleName: props.moduleName,
    moduleDescription: props.moduleDescription,
    camelModuleName: _underscoreString2['default'].camelize(props.moduleName),
    website: props.website,

    githubUsername: props.githubUsername,
    name: this.user.git.name(),
    email: this.user.git.email(),

    cli: props.cli
  };

  if (props.cli) {
    this.fs.copyTpl(this.templatePath('src/cli.js'), this.destinationPath('src/cli.js'), tpl);
  }

  copyList.map(function (item) {
    return _this2.fs.copy(_this2.templatePath(item.from), _this2.destinationPath(item.to));
  });
  tplList.map(function (item) {
    return _this2.fs.copyTpl(_this2.templatePath(item.from), _this2.destinationPath(item.to), tpl);
  });

  this.fs.copyTpl(this.templatePath('test/index.js'), this.destinationPath('test/' + props.moduleName + '.test.js'), tpl);

  return Promise.resolve();
}

module.exports = _yeomanGenerator2['default'].generators.Base.extend({
  init: function init() {
    var cb = this.async();

    getGithubUsername(this.user).then(userInteraction.bind(this)).then(generate.bind(this)).then(cb)['catch'](function (err) {
      return console.error(err);
    }); // eslint-disable-line
  },

  install: function install() {
    this.npmInstall();
    this.spawnCommand('git', ['init']);
  }
});