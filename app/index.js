'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _underscoreString = require('underscore.string');

var _underscoreString2 = _interopRequireDefault(_underscoreString);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _indexFilesConfig = require('./index/files-config');

var _indexFilesConfig2 = _interopRequireDefault(_indexFilesConfig);

var _indexUserInteraction = require('./index/user-interaction');

var _indexUserInteraction2 = _interopRequireDefault(_indexUserInteraction);

var _indexGenerate = require('./index/generate');

var _indexGenerate2 = _interopRequireDefault(_indexGenerate);

var _indexMessage = require('./index/message');

var _indexMessage2 = _interopRequireDefault(_indexMessage);

module.exports = _yeomanGenerator2['default'].Base.extend({
  init: function init() {
    var _this = this;

    var cb = this.async();

    var prompt = this.prompt.bind(this);
    var templatePath = this.templatePath.bind(this);
    var destinationPath = this.destinationPath.bind(this);
    var appname = this.appname;
    var user = this.user;
    var fs = this.fs;

    this.log(_yosay2['default']('⦿ NP: A convenient generator for npm modules.'));

    _indexUserInteraction2['default']({ prompt: prompt, appname: appname, normalizeUrl: _normalizeUrl2['default'], _s: _underscoreString2['default'] }).then(function (props) {
      return _indexGenerate2['default'](_indexFilesConfig2['default'], props, { _s: _underscoreString2['default'], user: user, fs: fs, templatePath: templatePath, destinationPath: destinationPath });
    }).then(function (props) {
      return _this.props = props;
    }).then(function () {
      return cb();
    })['catch'](console.error.bind(console)); // eslint-disable-line
  },

  install: function install() {
    if (this.options.skipInstall) return;

    this.npmInstall();
    this.spawnCommand('git', ['init']);
  },

  end: function end() {
    if (!this.props) return;

    _indexMessage2['default'](this.log.bind(this), this.props);
  }
});