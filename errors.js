const chalk = require('chalk')
const { stderr } = process;
const errAction = () => {
  stderr.write(chalk.black.bgRed('ERROR Action not specified!\n'));
  process.exit(1);
}
const errActionValue = () => {
  stderr.write(chalk.black.bgRed('ERROR Action value is incorrect! Please enter a "encode" or "decode".\n'));
  process.exit(1);
}
const errShift = () => {
  stderr.write(chalk.black.bgRed('ERROR Shift flag is empty!\n'));
  process.exit(1);
}
const errShiftValue = () => {
  stderr.write(chalk.black.bgRed('ERROR Shift value is incorrect! Please enter a positive integer.\n'));
  process.exit(1);
}
const errInput = () => {
  stderr.write(chalk.black.bgRed("ERROR -i or --input is not correct!"));
  process.exit(1);
}
const errOutput = () => {
  stderr.write(chalk.black.bgRed("ERROR -o or --output is not correct!"));
  process.exit(1);
}

module.exports = {
  errAction,
  errActionValue,
  errShift,
  errShiftValue,
  errInput,
  errOutput,
};