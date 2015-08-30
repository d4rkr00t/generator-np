import yeoman from 'yeoman-generator';
import normalizeUrl from 'normalize-url';
import humanizeUrl from 'humanize-url';
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

module.exports = yeoman.generators.Base.extend({
  init() {
    const cb = this.async();

    this
      .getGithubUsername()
      .then(this.userInteraction.bind(this))
      .then(this.bootstrap.bind(this))
      .then(cb);
  },

  getGithubUsername() {
    return new Promise((resolve, reject) => {
      this.user.github.username((err, githubUsername) => {
        if (err) reject(err);

        resolve(githubUsername);
      });
    });
  },

  userInteraction(githubUsername) {
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
  },

  bootstrap(props) {
    const tpl = {
      moduleName: props.moduleName,
      camelModuleName: _s.camelize(props.moduleName),
      humanizedWebsite: humanizeUrl(props.website),

      githubUsername: props.githubUsername,
      name: this.user.git.name(),
      email: this.user.git.email(),

      cli: props.cli
    };

    if (props.cli) {
      this.fs.copyTpl(this.templatePath('src/bin/cli.js'), this.destinationPath('src/bin/cli.js'), tpl);
    }

    copyList.map(item => this.fs.copy(item.from, item.to));
    tplList.map(item => this.fs.copyTpl(item.from, item.to, tpl));

    this.fs.copy('test/index.js', `test/${props.moduleName}.test.js`);

    return Promise.resolve();
  },

  install() {
    this.installDependencies();
  }
});
