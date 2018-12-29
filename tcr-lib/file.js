const fs = require('fs');

const getFileContents = (file) => {
  try {
    return fs.readFileSync(file).toString('utf8');
  } catch (err) {
    return '';
  }
};
const saveFileContents = (file, message) => {
  try {
    fs.writeFileSync(file, message);
  } catch (err) {
    console.log('err saving', err);
  }
};
const swapFiles = (file1, file2) => fs.renameSync(file1, file2);

module.exports.getFileContents = getFileContents;
module.exports.saveFileContents = saveFileContents;
module.exports.swapFiles = swapFiles;
