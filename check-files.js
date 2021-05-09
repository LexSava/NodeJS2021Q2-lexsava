const fs = require('fs')
const moduleErrors = require('./errors')
const { errInput, errOutput } = moduleErrors;

const checkFiles = (input, output) => {
  if (input === undefined || output === undefined) {
    return;
  }
  if (!fs.existsSync(input)) {
    errInput();
    process.exit(1);
  }
  if (!fs.existsSync(output)) {
    errOutput();
    process.exit(1);
  }
}

module.exports = {
  checkFiles
};