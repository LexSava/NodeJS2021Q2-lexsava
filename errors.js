const chalk = require('chalk')

const errAction = () => {
  console.error(chalk.red('ERROR Action not specified!\n'));
}
const errActionValue = () => {
  console.error(chalk.red('ERROR Action value is incorrect! Please enter a "encode" or "decode".\n'));
}

const errShift = () => {
  console.error(chalk.red('ERROR Shift flag is empty!\n'));
}
const errShiftValue = () => {
  console.error(chalk.red('ERROR Shift value is incorrect! Please enter a positive integer.\n'));
}
const errInput = () => {
  console.error(chalk.red("ERROR -i or --input is not correct!"));
}
const errOutput = () => {
  console.error(chalk.red("ERROR -o or --output is not correct!"));
}

module.exports = {
  errAction,
  errActionValue,
  errShift,
  errShiftValue,
  errInput,
  errOutput,
};