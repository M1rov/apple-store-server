const fs = require('fs')

function readAllFiles(dirname) {
  const files = []
  const filenames = fs.readdirSync(dirname);
  filenames.forEach(function (filename) {
    files.push(fs.readFileSync(`${dirname}/${filename}`, 'base64'));
  });
  return files;
}

module.exports = readAllFiles;