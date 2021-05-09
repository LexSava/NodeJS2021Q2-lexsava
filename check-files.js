const fs = require('fs')
const moduleErrors = require('./errors')
const { errInput, errOutput } = moduleErrors;

const checkFiles = (input, output) => {
  if (input === undefined || output === undefined) {
    return;
  }
  fs.access(input, fs.F_OK, (err) => {
    if (err) {
      errInput();
      return;
    }
  })
  fs.access(output, fs.F_OK, (err) => {
    if (err) {
      errOutput();
      return;
    }
  })
}

module.exports = {
  checkFiles
};