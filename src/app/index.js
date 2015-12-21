import yeoman from 'yeoman-generator';

import normalizeUrl from 'normalize-url';
import _s from 'underscore.string';
import yosay from 'yosay';

import filesConfig from './index/files-config';
import userInteraction from './index/user-interaction';
import generate from './index/generate';
import message from './index/message';

module.exports = yeoman.Base.extend({
  init() {
    const cb = this.async();

    const prompt = this.prompt.bind(this);
    const templatePath = this.templatePath.bind(this);
    const destinationPath = this.destinationPath.bind(this);
    const appname = this.appname;
    const user = this.user;
    const fs = this.fs;

    this.log(yosay('⦿ NP: A convenient generator for npm modules.'));

    userInteraction({ prompt, appname, normalizeUrl, _s })
      .then(props => generate(filesConfig, props, { _s, user, fs, templatePath, destinationPath }))
      .then(props => this.props = props)
      .then(() => cb())
      .catch(console.error.bind(console)); // eslint-disable-line
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
