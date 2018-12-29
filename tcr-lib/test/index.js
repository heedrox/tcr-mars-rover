const getCurrentTestFile = require('../lib/common.js').getCurrentTestFile;
const execSync = require('child_process').execSync;
const fs = require('fs');

const getTestsResults = (options) => {
  const resultFile = getCurrentTestFile(options);
  try {
    execSync(options.testCommand + ` > ${resultFile} 2>&1` );
    const resultStr = fs.readFileSync(resultFile);
    console.log('tests ok', resultStr.toString('utf8'));
    return true;
  } catch (err) {
    const resultStr = fs.readFileSync(resultFile);
    console.log('test failed', resultStr.toString('utf8'));
    return null;
  }
};

module.exports.getTestsResults = getTestsResults;
