const fs = require('fs');
const path = require('path');
const moduleCaesarCipher = require('./cipher')
const { caesarCipher } = moduleCaesarCipher;
const outputFile = path.join(__dirname, "output.txt");
const inputFile = path.join(__dirname, "input.txt");

fs.readFile(inputFile, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  fs.appendFile(outputFile, caesarCipher(`${content} `, 1), err => {
    if (err) {
      throw err;
    }
  })
  console.log('Encode:', content);
})

// console.log(caesarCipher('ABC', 1));