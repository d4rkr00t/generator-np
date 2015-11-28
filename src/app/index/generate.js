export function generateKeywords(keywords) {
  return (keywords.indexOf(',') !== -1 ? keywords.split(',') : keywords.split(' '))
    .map(kw => '"' + kw.trim() + '"')
    .join(',');
}

export function generateTplData(props, imports) {
  const { _s, user } = imports;

  return {
    center: props.center,
    moduleName: props.moduleName,
    moduleDescription: props.moduleDescription,
    moduleKeywords: generateKeywords(props.moduleKeywords),
    camelModuleName: _s.camelize(props.moduleName),
    website: props.website,

    githubUsername: props.githubUsername,
    name: user.git.name(),
    email: user.git.email(),

    travis: props.travis,
    coveralls: props.travis && props.coveralls,
    commitizen: props.commitizen,

    cli: props.cli
  };
}

export function copy(copyList, imports) {
  const { fs, templatePath, destinationPath } = imports;

  copyList.map(item => fs.copy(templatePath(item.from), destinationPath(item.to)));
}

export function tpl(props, tplList, tplData, imports) {
  const { fs, templatePath, destinationPath } = imports;

  tplList
    .filter(item => !(!props.travis && item.from === 'travis.yml'))
    .map(item => fs.copyTpl(templatePath(item.from), destinationPath(item.to), tplData));
}

export function cli(tplData, imports) {
  const { fs, templatePath, destinationPath } = imports;

  fs.copyTpl(templatePath('src/cli.js'), destinationPath('src/cli.js'), tplData);
}

export function tests(props, tplData, imports) {
  const { fs, templatePath, destinationPath } = imports;

  fs.copyTpl(templatePath('test/index.js'), destinationPath(`test/${props.moduleName}.test.js`), tplData);
}

export default function generate(files, props, imports) {
  const { copy: copyList, tpl: tplList } = files;
  const tplData = generateTplData(props, imports);

  if (props.cli) cli(tplData, imports);

  copy(copyList, imports);
  tpl(props, tplList, tplData, imports);
  tests(props, tplData, imports);

  return Promise.resolve(props);
}
