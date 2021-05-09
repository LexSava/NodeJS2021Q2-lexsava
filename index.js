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

// console.log(argv);

// $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
// $ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt

// const args = parseArgs(process.argv.slice(2));

console.log(argv);

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

if (action === "encode" || action === "encode") {
  if (input === 'input.txt' && output === 'output.txt') {
    console.log('introduced input and output');
    fs.readFile(inputFile, 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }
      fs.appendFile(outputFile, caesarCipher(`${content}\n`, shift), err => {
        if (err) {
          throw err;
        }
      })
    })
  }
}

if (action === "encode" || action === "encode") {
  if (!argv.i && !argv.input && !argv.o && !argv.output) {
    console.log('no input and output');
    const eventUser = readline.createInterface({ input: process.stdin, output: process.stdout });
    eventUser.question(chalk.blue(`Enter the data: \n`), (userInput) => {
      if (userInput.length > 0) {
        console.log(caesarCipher(`${userInput}\n`, shift));
      }
      eventUser.on('line', (userInput) => {
        if (userInput.length > 0) {
          console.log(caesarCipher(`${userInput}\n`, shift));
        }
      })
    })
  }
}

if (action === "encode" || action === "encode") {
  if (input === undefined && output === 'output.txt') {
    console.log('no input but there is output');
    const eventUser = readline.createInterface({ input: process.stdin, output: process.stdout });
    eventUser.question(chalk.blue(`Enter the data: \n`), (userInput) => {
      if (userInput.length > 0) {
        fs.appendFile(outputFile, caesarCipher(`${userInput}\n`, shift), err => {
          if (err) {
            throw err;
          }
        })
      }
      eventUser.on('line', (userInput) => {
        if (userInput.length > 0) {
          fs.appendFile(outputFile, caesarCipher(`${userInput}\n`, shift), err => {
            if (err) {
              throw err;
            }
          })
        }
      })
    })
  }
}

if (action === "encode" || action === "encode") {
  if (output === undefined && input === 'input.txt') {
    console.log('no output but there is input');
    fs.readFile(inputFile, 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }
      console.log(caesarCipher(`${content}\n`, shift));
    })
  }
}

