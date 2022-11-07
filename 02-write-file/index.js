const fs = require('fs');
const path = require('path');
const { stdout, stdin, exit } = process;

const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);

stdout.write('Hello! Enter your text!\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
  output.write(data);
});

process.on('exit', () => stdout.write(`Goodbye! Your text is added to ${filePath}!`));
process.on('SIGINT', exit);
