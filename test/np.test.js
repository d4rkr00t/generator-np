import path from 'path';
import yeomanGenerator from 'yeoman-generator';
import assert from 'yeoman-assert';

const helpers = yeomanGenerator.test;
const tempDir = path.join(__dirname, 'temp');

describe('generator', () => {
  let generator;
  beforeEach(done => {
    const deps = ['../../app'];

    helpers.testDirectory(tempDir, err => {
      if (err) {
        done(err);
        return;
      }

      generator = helpers.createGenerator('np:app', deps, null, {
        skipInstall: true
      });

      done();
    });
  });

  it('generates expected files', done => {
    const expected = [
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      '.istanbul.yml',
      '.travis.yml',
      'src/lib/index.js',
      'test/setup.js',
      'test/test.test.js',
      'package.json',
      '.README.md'
    ];

    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      website: 'test.com',
      cli: false
    });

    generator.run(() => {
      assert.file(expected);
      assert.noFile('cli.js');
      done();
    });
  });

  it('No travis', done => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      website: 'test.com',
      travis: false
    });

    generator.run(() => {
      assert.noFile('.travis.yml');
      assert.noFileContent('package.json', /coveralls/);
      assert.noFileContent('.README.md', /coveralls/);
      done();
    });
  });

  it('Travis + no coveralls', done => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      website: 'test.com',
      travis: true,
      coveralls: false
    });

    generator.run(() => {
      assert.noFileContent('package.json', /coveralls/);
      assert.noFileContent('.README.md', /coveralls/);
      assert.noFileContent('.travis.yml', /coveralls/);
      done();
    });
  });

  it('No commitizen', done => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      commitizen: false
    });

    generator.run(() => {
      assert.noFileContent('package.json', /cz-conventional-changelog/);
      assert.noFileContent('.README.md', /Commitizen friendly/);
      done();
    });
  });

  it('CLI', done => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      website: 'test.com',
      cli: true
    });

    generator.run(() => {
      assert.file('src/cli.js');
      assert.fileContent('package.json', /"bin":/);
      assert.fileContent('package.json', /"bin": "cli.js"/);
      assert.fileContent('package.json', /"meow"/);
      done();
    });
  });
});
