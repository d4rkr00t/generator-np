'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _normalizeUrl = require('normalize-url');

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _underscore = require('underscore.string');

var _underscore2 = _interopRequireDefault(_underscore);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _filesConfig = require('./index/files-config');

var _filesConfig2 = _interopRequireDefault(_filesConfig);

var _userInteraction = require('./index/user-interaction');

var _userInteraction2 = _interopRequireDefault(_userInteraction);

var _generate = require('./index/generate');

var _generate2 = _interopRequireDefault(_generate);

var _message = require('./index/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator2.default.Base.extend({
  init: function init() {
    var _this = this,
        _context;

    var cb = this.async();

    var prompt = this.prompt.bind(this);
    var templatePath = this.templatePath.bind(this);
    var destinationPath = this.destinationPath.bind(this);
    var appname = this.appname;
    var user = this.user;
    var fs = this.fs;

    this.log((0, _yosay2.default)('⦿ NP: A convenient generator for npm modules.'));

    (0, _userInteraction2.default)({ prompt: prompt, appname: appname, normalizeUrl: _normalizeUrl2.default, _s: _underscore2.default }).then(function (props) {
      return (0, _generate2.default)(_filesConfig2.default, props, { _s: _underscore2.default, user: user, fs: fs, templatePath: templatePath, destinationPath: destinationPath });
    }).then(function (props) {
      return _this.props = props;
    }).then(function () {
      return cb();
    }).catch((_context = console).error.bind(_context)); // eslint-disable-line
  },
  install: function install() {
    if (this.options.skipInstall) return;

    this.npmInstall();
    this.spawnCommand('git', ['init']);
  },
  end: function end() {
    if (!this.props) return;

    (0, _message2.default)(this.log.bind(this), this.props);
  }
});