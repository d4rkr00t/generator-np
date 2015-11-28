'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userInteraction;
function userInteraction(imports) {
  var prompt = imports.prompt;
  var appname = imports.appname;
  var normalizeUrl = imports.normalizeUrl;
  var _s = imports._s;

  return new Promise(function (resolve) {
    prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: appname.replace(/\s/g, '-'),
      required: true,
      filter: function filter(val) {
        return _s.slugify(val);
      }
    }, {
      name: 'moduleDescription',
      message: 'What is description for your module?',
      default: 'My awesome module',
      required: true
    }, {
      type: 'confirm',
      name: 'center',
      message: 'Center title and badges in README?',
      store: true,
      default: false
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      required: true
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: false,
      default: function _default(props) {
        return 'https://github.com/' + props.githubUsername;
      },
      filter: function filter(val) {
        return val ? normalizeUrl(val) : '';
      }
    }, {
      name: 'travis',
      message: 'Do you need a .travis.yml?',
      type: 'confirm',
      default: true
    }, {
      name: 'coveralls',
      message: 'Do you need setup for coveralls?',
      type: 'confirm',
      default: true,
      when: function when(props) {
        return props.travis;
      }
    }, {
      name: 'commitizen',
      message: 'Do you need setup for commitizen?',
      type: 'confirm',
      default: true
    }, {
      name: 'cli',
      message: 'Do you need a CLI?',
      type: 'confirm',
      default: false
    }], resolve);
  });
}