const execSync = require('child_process').execSync;
const { getCurrentTestFile, getPreviousTestFile } = require('../lib/common');
const { swapFiles } = require('../lib/file');
const { getCommitMessageFromDiff } = require('./commit-message-diff');
const { saveLastCommitMessage, getLastCommitMessage } = require('./last-commit');

const getCommitMessage = (options) => {
  const msgFromDiff = getCommitMessageFromDiff(options);
  const commitMessage = msgFromDiff ? msgFromDiff : getLastCommitMessage(options);
  const finalMessage = commitMessage ? commitMessage : '---';
  console.log('commit message: ', finalMessage);
  return finalMessage;
};

const saveTestResultsForLater = (options) => {
  const currentFile = getCurrentTestFile(options);
  const previousFile = getPreviousTestFile(options);
  swapFiles(currentFile, previousFile);
};

const strip = message => message.replace('"', '').replace("'", "");
const getCommitCommand = (options, message) =>
  options.commitCommand.replace('{COMMIT_MSG}', strip(message));

const doCommit = (options, message) => {
  const commitCommand = getCommitCommand(options, message);
  console.log('commiting: ', commitCommand);
  execSync(commitCommand, { stdio: 'pipe' });
};
const commit = (options) => {
  try {
    const message = getCommitMessage(options);
    saveLastCommitMessage(options, message);
    saveTestResultsForLater(options);
    doCommit(options, message);
    console.log('commited');
  } catch (err) {
    console.log('nothing new to commit');
  }
};

module.exports.commit = commit;
