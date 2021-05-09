const chalk = require('chalk')

const errAction = () => {
  console.error(chalk.black.bgRed('ERROR Action not specified!\n'));
}
const errActionValue = () => {
  console.error(chalk.black.bgRed('ERROR Action value is incorrect! Please enter a "encode" or "decode".\n'));
}
const errShift = () => {
  console.error(chalk.black.bgRed('ERROR Shift flag is empty!\n'));
}
const errShiftValue = () => {
  console.error(chalk.black.bgRed('ERROR Shift value is incorrect! Please enter a positive integer.\n'));
}
const errInput = () => {
  console.error(chalk.black.bgRed("ERROR -i or --input is not correct!"));
}
const errOutput = () => {
  console.error(chalk.black.bgRed("ERROR -o or --output is not correct!"));
}

module.exports = {
  errAction,
  errActionValue,
  errShift,
  errShiftValue,
  errInput,
  errOutput,
};