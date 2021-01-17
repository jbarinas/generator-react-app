var Generator = require("yeoman-generator");

module.exports = class extends (
  Generator
) {
  initializing() {}
  prompting() {}
  configuring() {
    // this.config.save();
  }
  default() {}
  writing() {
    this.fs.copy(this.templatePath("**/.*"), this.destinationPath());
    this.fs.copy(this.templatePath("**/*"), this.destinationPath());
  }
  conflicts() {}
  install() {
    this.npmInstall();
  }
  end() {}
};
