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

  it('CLI option', done => {
    helpers.mockPrompt(generator, {
      moduleName: 'test',
      moduleDescription: 'My awesome module description',
      githubUsername: 'test',
      website: 'test.com',
      cli: true
    });

    generator.run(() => {
      assert.file('cli.js');
      assert.fileContent('package.json', /"bin":/);
      assert.fileContent('package.json', /"bin": "cli.js"/);
      assert.fileContent('package.json', /"meow"/);
      done();
    });
  });
});
