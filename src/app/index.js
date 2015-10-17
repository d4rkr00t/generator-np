import yeoman from 'yeoman-generator';

import normalizeUrl from 'normalize-url';
import _s from 'underscore.string';

import filesConfig from './files-config';
import userInteraction from './lib/user-interaction';
import generate from './lib/generate';
import message from './lib/message';

module.exports = yeoman.generators.Base.extend({
  init() {
    const cb = this.async();

    const prompt = ::this.prompt;
    const templatePath = ::this.templatePath;
    const destinationPath = ::this.destinationPath;
    const appname = this.appname;
    const user = this.user;
    const fs = this.fs;

    userInteraction({ prompt, appname, normalizeUrl, _s })
      .then(props => generate(filesConfig, props, { _s, user, fs, templatePath, destinationPath }))
      .then(props => this.props = props)
      .then(() => cb())
      .catch(::console.error); // eslint-disable-line
  },

  install() {
    if (this.options.skipInstall) return;

    this.npmInstall();
    this.spawnCommand('git', ['init']);
  },

  end() {
    if (!this.props) return;

    message(this.log.bind(this), this.props);
  }
});
