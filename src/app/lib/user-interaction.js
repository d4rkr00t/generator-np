export default function userInteraction(imports) {
  const { prompt, appname, normalizeUrl, _s } = imports;

  return new Promise(resolve => {
    prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: appname.replace(/\s/g, '-'),
        required: true,
        filter(val) { return _s.slugify(val); }
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
        required: true
      },
      {
        name: 'website',
        message: 'What is the URL of your website? [default: https://github.com/{github-user-name}]',
        store: true,
        filter(val) { return val ? normalizeUrl(val) : ''; }
      },
      {
        name: 'travis',
        message: 'Do you need a .travis.yml?',
        type: 'confirm',
        default: true
      },
      {
        name: 'coveralls',
        message: 'Do you need setup for coveralls?',
        type: 'confirm',
        default: true,
        when(props) { return props.travis; }
      },
      {
        name: 'commitizen',
        message: 'Do you need commitizen setup?',
        type: 'confirm',
        default: true
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
