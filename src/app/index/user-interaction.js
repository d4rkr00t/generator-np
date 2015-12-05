export default function userInteraction(imports) {
  const { prompt, appname, normalizeUrl, _s } = imports;

  return new Promise(resolve => {
    prompt([
      {
        name: 'moduleName',
        message: 'What is the module name?',
        default: appname.replace(/\s/g, '-'),
        required: true,
        filter(val) { return _s.slugify(val); }
      },
      {
        name: 'moduleDescription',
        message: 'What is the module description?',
        default: 'My awesome module',
        required: true
      },
      {
        name: 'moduleKeywords',
        message: 'What are the module keywords?',
        default: 'node, module',
        required: true
      },
      {
        type: 'confirm',
        name: 'center',
        message: 'Center title and badges in README?',
        default: false
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        required: true
      },
      {
        name: 'website',
        message: 'What is the URL of your website?',
        store: false,
        default(props) { return `https://github.com/${props.githubUsername}`; },
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
        message: 'Do you need setup for commitizen?',
        type: 'confirm',
        default: true
      },
      {
        name: 'githubRelease',
        message: 'Do you need automatic github releases?',
        type: 'confirm',
        default: false,
        when(props) { return props.commitizen && props.travis; }
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
