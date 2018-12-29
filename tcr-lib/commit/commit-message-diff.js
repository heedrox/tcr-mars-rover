const JsDiff = require('diff');
const stripAnsi = require('strip-ansi');
const { getFileContents } = require('../lib/file');
const { getCurrentTestFile, getPreviousTestFile } = require('../lib/common');

const byNotExcludedMessages = (excludeRegexs) => (part) => {
  return excludeRegexs.filter((regex) => part.match(regex)).length === 0;
};

const getPartsFrom = (diff) => {
  const result = [];
  diff.forEach((part) => {
    if (part.added) {
      result.push(...stripAnsi(part.value).split('\n'));
    }
  });
  return result;
};

const getCommitMessagePartsFromDiff = (options) => {
  const currentFile = getCurrentTestFile(options);
  const previousFile = getPreviousTestFile(options);
  const diff = JsDiff.diffLines(
    getFileContents(previousFile),
    getFileContents(currentFile),
    { ignoreWhitespace: true, newlineIsToken: false });
  return getPartsFrom(diff);
};

const getCommitMessageFromDiff = (options) => {
  const parts = getCommitMessagePartsFromDiff(options);
  return parts.filter(byNotExcludedMessages(options.excludeMessageCommit)).join('\n');
};

module.exports.getCommitMessageFromDiff = getCommitMessageFromDiff;
