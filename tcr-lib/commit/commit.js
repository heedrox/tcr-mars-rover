const execSync = require('child_process').execSync;
const { getCurrentTestFile, getPreviousTestFile } = require('../common');
const { swapFiles } = require('../file');
const { getCommitMessageFromDiff } = require('./commit-message-diff');
const { saveLastCommitMessage, getLastCommitMessage } = require('./last-commit');

const getCommitMessage = (options) => {
  const msgFromDiff = getCommitMessageFromDiff(options);
  const commitMessage = msgFromDiff ? msgFromDiff : getLastCommitMessage(options);
  return commitMessage ? commitMessage : '---';
};

const saveTestResultsForLater = (options) => {
  const currentFile = getCurrentTestFile(options);
  const previousFile = getPreviousTestFile(options);
  swapFiles(currentFile, previousFile);
};
const commit = (options) => {
  try {
    const message = getCommitMessage(options);
    console.log('commit message: ', message);
    saveLastCommitMessage(options, message);
    saveTestResultsForLater(options);
    execSync(options.commitCommand, { stdio: 'pipe' });
    console.log('commited');
  } catch (err) {
    // console.log('commit failed, probably nothing to commit');
  }
};

module.exports.commit = commit;
