import yeoman from 'yeoman-generator';
import normalizeUrl from 'normalize-url';
import _s from 'underscore.string';

const copyList = [
  { from: 'babelrc', to: '.babelrc' },
  { from: 'editorconfig', to: '.editorconfig' },
  { from: 'eslintrc', to: '.eslintrc' },
  { from: 'gitignore', to: '.gitignore' },
  { from: 'istanbul.yml', to: '.istanbul.yml' },
  { from: 'travis.yml', to: '.travis.yml' },
  { from: 'src/lib/index.js', to: 'src/lib/index.js' },
  { from: 'test/setup.js', to: 'test/setup.js' }
];

const tplList = [
  { from: '_package.json', to: 'package.json' },
  { from: 'README.md', to: '.README.md' }
];

function getGithubUsername(user) {
  return new Promise((resolve, reject) => {
    user.github.username((err, githubUsername) => {
      if (err) reject(err);

      resolve(githubUsername);
    });
  });
}

function userInteraction(githubUsername) {
  return new Promise(resolve => {
    this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: this.appname.replace(/\s/g, '-'),
        required: true,
        filter(val) {
          return _s.slugify(val);
        }
      },
      {
        name: 'moduleDescription',
        message: 'What is description for your module?',
        default: 'My awesome module',
        required: true
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        default: githubUsername,
        required: true
      },
      {
        name: 'website',
        message: 'What is the URL of your website?',
        store: true,
        default: `https://github.com/${githubUsername}`,
        required: true,
        filter(val) {
          return normalizeUrl(val);
        }
      },
      {
        name: 'cli',
        message: 'Do you need a CLI?',
        type: 'confirm',
        default: false
      }
    ], resolve);
  });
}

function generate(props) {
  const tpl = {
    moduleName: props.moduleName,
    moduleDescription: props.moduleDescription,
    camelModuleName: _s.camelize(props.moduleName),
    website: props.website,

    githubUsername: props.githubUsername,
    name: this.user.git.name(),
    email: this.user.git.email(),

    cli: props.cli
  };

  if (props.cli) {
    this.fs.copyTpl(this.templatePath('src/cli.js'), this.destinationPath('src/cli.js'), tpl);
  }

  copyList.map(item => this.fs.copy(this.templatePath(item.from), this.destinationPath(item.to)));
  tplList.map(item => this.fs.copyTpl(this.templatePath(item.from), this.destinationPath(item.to), tpl));

  this.fs.copyTpl(this.templatePath('test/index.js'), this.destinationPath(`test/${props.moduleName}.test.js`), tpl);

  return Promise.resolve();
}

module.exports = yeoman.generators.Base.extend({
  init() {
    const cb = this.async();

    getGithubUsername(this.user)
      .then(userInteraction.bind(this))
      .then(generate.bind(this))
      .then(cb)
      .catch(err => console.error(err)); // eslint-disable-line
  },

  install() {
    this.npmInstall();
    this.spawnCommand('git', ['init']);
  }
});
