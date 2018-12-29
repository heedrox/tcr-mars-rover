const { saveFileContents, getFileContents } = require('../lib/file');
const { getLastCommitMessageFile } = require('../lib/common');

const getLastCommitMessage = options => {
  const file = getLastCommitMessageFile(options);
  return getFileContents(file);
};
const saveLastCommitMessage = (options, message) => {
  const file = getLastCommitMessageFile(options);
  saveFileContents(file, message);
};

module.exports.getLastCommitMessage = getLastCommitMessage;
module.exports.saveLastCommitMessage = saveLastCommitMessage;