const watch = require('node-watch');
const fs = require('fs');
const execSync = require('child_process').execSync;
const init = require('./init.js').init;
const { commit } = require('./commit/index.js');
const getCurrentTestFile = require('./common.js').getCurrentTestFile;

const options = {
  tcrDir : '.tcr',
  testCommand: 'npm run test',
  commitCommand: 'COMMIT_MSG="{COMMIT_MSG}" npm run commit',
  revertCommand: 'npm run revert',
  watchFilter: /.js$/,
  excludeMessageCommit: [/^$/, /^> /, /.* passing \(.*\)$/]
};

function getTestsResults(options) {
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
}

function revert(options) {
  try {
    execSync(options.revertCommand);
    console.log('reverted');
  } catch (err) {
    // console.log('revert failed', err);
  }
}

init(options);
watch(['src/', 'test/'], { recursive: true, filter: options.watchFilter }, function (evt, name) {
  // console.log(evt);
  console.log('updated file: ', name);
  const testOutput = getTestsResults(options);
  if (testOutput) {
    console.log('commiting');
    commit(options);
  } else {
    console.log('reverting');
    revert(options);
  }
});
