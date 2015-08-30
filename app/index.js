'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _humanizeUrl = require('humanize-url');

var _humanizeUrl2 = _interopRequireDefault(_humanizeUrl);

var _underscoreString = require('underscore.string');

var _underscoreString2 = _interopRequireDefault(_underscoreString);

var copyList = [{ from: 'babelrc', to: '.babelrc' }, { from: 'editorconfig', to: '.editorconfig' }, { from: 'eslintrc', to: '.eslintrc' }, { from: 'gitignore', to: '.gitignore' }, { from: 'istanbul.yml', to: '.istanbul.yml' }, { from: 'travis.yml', to: '.travis.yml' }, { from: 'src/lib/index.js', to: 'src/lib/index.js' }, { from: 'test/setup.js', to: 'test/setup.js' }];

var tplList = [{ from: '_package.json', to: 'package.json' }, { from: 'README.md', to: '.README.md' }];

module.exports = _yeomanGenerator2['default'].generators.Base.extend({
  init: function init() {
    var cb = this.async();

    this.getGithubUsername().then(this.userInteraction.bind(this)).then(this.bootstrap.bind(this)).then(cb);
  },

  getGithubUsername: function getGithubUsername() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.user.github.username(function (err, githubUsername) {
        if (err) reject(err);

        resolve(githubUsername);
      });
    });
  },

  userInteraction: function userInteraction(githubUsername) {
    var _this2 = this;

    return new Promise(function (resolve) {
      _this2.prompt([{
        name: 'moduleName',
        message: 'What do you want to name your module?',
        'default': _this2.appname.replace(/\s/g, '-'),
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
  },

  bootstrap: function bootstrap(props) {
    var _this3 = this;

    var tpl = {
      moduleName: props.moduleName,
      camelModuleName: _underscoreString2['default'].camelize(props.moduleName),
      humanizedWebsite: _humanizeUrl2['default'](props.website),

      githubUsername: props.githubUsername,
      name: this.user.git.name(),
      email: this.user.git.email(),

      cli: props.cli
    };

    if (props.cli) {
      this.fs.copyTpl(this.templatePath('src/bin/cli.js'), this.destinationPath('src/bin/cli.js'), tpl);
    }

    copyList.map(function (item) {
      return _this3.fs.copy(item.from, item.to);
    });
    tplList.map(function (item) {
      return _this3.fs.copyTpl(item.from, item.to, tpl);
    });

    this.fs.copy('test/index.js', 'test/' + props.moduleName + '.test.js');

    return Promise.resolve();
  },

  install: function install() {
    this.installDependencies();
  }
});