const fs = require('fs');
const path = require('path');

const outputFile = path.join(__dirname, "output.txt");
const inputFile = path.join(__dirname, "input.txt");

fs.readFile(inputFile, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  fs.appendFile(outputFile, `${content}\n`, err => {
    if (err) {
      throw err;
    }
  })
  console.log('Encode:', content);
})

