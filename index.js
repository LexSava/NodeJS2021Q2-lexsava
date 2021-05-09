const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const moduleCaesarCipher = require('./cipher')
const moduleErrors = require('./errors')
const moduleCheckArgv = require('./check-argv')
const { stderr } = process;

const { caesarCipher } = moduleCaesarCipher;
const { errInput, errOutput } = moduleErrors;
const { checkArgv } = moduleCheckArgv;
const outputFile = path.join(__dirname, "output.txt");
const inputFile = path.join(__dirname, "input.txt");
const readline = require('readline');

const argv = require('minimist')(process.argv.slice(2));

let action;
let shift;
let input;
let output;

Object.keys(argv).forEach((argItem) => {
  switch (argItem) {
    case 's':
    case 'shift':
      shift = argv[argItem];
      break;

    case 'i':
    case 'input':
      input = argv[argItem];
      break;

    case 'o':
    case 'output':
      output = argv[argItem];
      break;

    case 'a':
    case 'action':
      action = argv[argItem];
      break;

    default:
      break;
  }
});

const CheckValidityFiles = (() => {
  checkArgv(action, shift);
  if (argv.i && input !== 'input.txt' || argv.input && input !== 'input.txt') {
    errInput();
    process.exit(1);
  } else if (argv.o && argv.o !== 'output.txt' || argv.output && argv.output !== 'output.txt') {
    errOutput();
    process.exit(1);
  }
})();


  if (input === 'input.txt' && output === 'output.txt') {
    console.log(chalk.bgGreen.black('introduced input and output'));
    fs.readFile(inputFile, 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }
      fs.appendFile(outputFile, caesarCipher(`${content}\n`, shift, action), err => {
        if (err) {
          throw err;
        }
      })
    })
  }

  if (!argv.i && !argv.input && !argv.o && !argv.output) {
    console.log(chalk.bgGreen.black('no input and output'));
    const eventUser = readline.createInterface({ input: process.stdin, output: process.stdout });
    eventUser.question(chalk.blue(`Enter the data: \n`), (userInput) => {
      if (userInput.length > 0) {
        console.log(caesarCipher(`${userInput}\n`, shift, action));
      }
      eventUser.on('line', (userInput) => {
        if (userInput.length > 0) {
          console.log(caesarCipher(`${userInput}\n`, shift, action));
        }
      })
    })
  }

  if (input === undefined && output === 'output.txt') {
    console.log(chalk.bgGreen.black('no input but there is output'));
    const eventUser = readline.createInterface({ input: process.stdin, output: process.stdout });
    eventUser.question(chalk.blue(`Enter the data: \n`), (userInput) => {
      if (userInput.length > 0) {
        fs.appendFile(outputFile, caesarCipher(`${userInput}\n`, shift, action), err => {
          if (err) {
            throw err;
          }
        })
      }
      eventUser.on('line', (userInput) => {
        if (userInput.length > 0) {
          fs.appendFile(outputFile, caesarCipher(`${userInput}\n`, shift, action), err => {
            if (err) {
              throw err;
            }
          })
        }
      })
    })
  }

  if (output === undefined && input === 'input.txt') {
    console.log(chalk.bgGreen.black('no output but there is input'));
    fs.readFile(inputFile, 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }
      console.log(caesarCipher(`${content}\n`, shift, action));
    })
  }


